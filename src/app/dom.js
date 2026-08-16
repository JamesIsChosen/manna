/* DOM layer — applies the pure render models to the page and translates user
 * gestures into SelectionService events. No pane manipulates another pane's
 * DOM: every study pane receives its view through the state, which dispatches
 * the central service's selections (§17).
 *
 * Responsive tiers (§40): >=1150px full desk (three columns), 640-1149px
 * reader plus one collapsible study pane, <640px phone (single column plus a
 * study drawer above the bottom nav). */
(function (g) {
  'use strict';
  var SEL = g.Manna.selection;
  var APP = g.Manna.app;
  var RENDER = APP.render;
  var FIX = g.Manna.fixtures;
  var PLAT = g.Manna.platform;

  /* ---------------- tiny DOM helpers ---------------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === false || v === null || v === undefined) continue;
        if (k === 'style') node.style.cssText = v;
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, String(v));
      }
    }
    append(node, children);
    return node;
  }
  function append(node, children) {
    if (children === undefined || children === null) return;
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  /* ---------------- selection summaries ---------------- */
  function ctxSummary(ctx) {
    if (!ctx) return 'NO SELECTION';
    var ref = ctx.reference ? RENDER.ref(ctx.reference) : '';
    if (ctx.type === 'verse' || ctx.type === 'passage') return ref;
    if (ctx.type === 'word') return 'WORD ' + ctx.strongsId + (ref ? ' · ' + ref : '');
    if (ctx.type === 'place') {
      var name = ctx.placeId && FIX.places[ctx.placeId] ? FIX.places[ctx.placeId].name : ctx.placeId;
      return 'PLACE ' + String(name).toUpperCase() + (ref ? ' · ' + ref : '');
    }
    return String(ctx.type).toUpperCase() + (ref ? ' · ' + ref : '');
  }

  function syncNote() {
    var pinned = state.pinnedPanes();
    if (!pinned.length) return 'ALL PANES FOLLOWING SCRIPTURE';
    return pinned.length + ' PANE(S) PINNED · ' + pinned.map(function (id) {
      return RENDER.panes[id].title;
    }).join(', ');
  }

  function verseByN(n) { return FIX.verses.verses[n - FIX.verses.verses[0].n]; }

  /* ---------------- pane bodies (model -> DOM) ---------------- */
  function bodyFor(paneId, ctx) {
    if (!ctx) {
      var hints = {
        commentary: 'TAP A VERSE TO READ ITS COMMENTARY.',
        xref: 'TAP A VERSE TO SEE ITS CROSS REFERENCES.',
        word: 'TAP A STUDY WORD — SUCH AS "LIGHT" — IN THE READER.',
        atlas: 'TAP A PLACE — SUCH AS CAPERNAUM — IN THE READER.'
      };
      return el('p', { class: 'pane-empty' }, hints[paneId]);
    }
    var m = RENDER.panes[paneId].model(ctx);
    switch (paneId) {
      case 'commentary':
        return el('div', {}, [
          el('p', { class: 'kicker' }, m.kicker),
          el('h3', { class: 'pane-ref' }, m.ref),
          el('p', { class: 'prose' }, m.body)
        ]);
      case 'xref':
        return el('div', {}, [
          el('p', { class: 'kicker' }, m.kicker)
        ].concat(m.rows.map(function (r) {
          return el('div', { class: 'xrow' }, [
            el('span', { class: 'xref-ref' }, r.ref),
            el('span', { class: 'xref-text' }, r.text)
          ]);
        })));
      case 'word':
        return el('div', { class: 'word-body' }, [
          el('span', { class: 'chip' }, m.chip),
          el('div', { class: 'greek' }, m.greek),
          el('div', { class: 'tr' }, m.tr),
          el('div', { class: 'morph' }, m.morph),
          el('p', { class: 'gloss' }, m.gloss),
          el('p', { class: 'from' }, 'FROM ' + m.from),
          el('div', { class: 'rel' }, m.rel.map(function (r) {
            return el('span', { class: 'rel-chip' }, r);
          }))
        ]);
      case 'atlas':
        return el('div', {}, [atlasBody(m)]);
    }
    return el('div');
  }

  function atlasBody(m) {
    var dots = el('div', { class: 'map-dots' });
    var selected = null;
    Object.keys(FIX.dots).forEach(function (id) {
      var pos = FIX.dots[id];
      if (id === m.placeId) selected = pos;
      dots.appendChild(el('div', {
        class: 'dot' + (id === m.placeId ? ' sel' : ''),
        style: 'left:' + pos[0] + '%;top:' + pos[1] + '%;'
      }));
    });
    var ring = el('div', { class: 'ring' + (selected ? ' on' : '') });
    if (selected) ring.style.cssText = 'left:' + selected[0] + '%;top:' + selected[1] + '%;';
    var map = el('div', { class: 'map' }, [
      el('div', {
        class: 'sea',
        style: 'left:' + FIX.sea.x + '%;top:' + FIX.sea.y + '%;width:' + FIX.sea.w + '%;height:' + FIX.sea.h + '%;'
      }),
      dots,
      ring,
      el('p', { class: 'map-caption' }, 'schematic — bundled vector atlas goes here')
    ]);
    return el('div', { class: 'atlas-grid' }, [
      map,
      el('div', { class: 'adetail' }, [
        el('h3', { class: 'place-name' }, m.name.toUpperCase()),
        el('p', { class: 'place-desc' }, m.desc),
        el('ul', { class: 'facts' }, m.facts.map(function (f) { return el('li', {}, f); }))
      ])
    ]);
  }

  /* ---------------- FOLLOW | PIN ---------------- */
  function fpButtons(paneId) {
    var follow = el('button', { class: 'fp-btn', 'data-fp': 'follow', type: 'button', 'aria-pressed': 'true' }, 'FOLLOW');
    var pin = el('button', { class: 'fp-btn', 'data-fp': 'pin', type: 'button', 'aria-pressed': 'false' }, 'PIN');
    follow.addEventListener('click', function () { state.unpin(paneId); });
    pin.addEventListener('click', function () { state.pin(paneId); });
    return [follow, pin];
  }

  function setFpState(group, pinned) {
    if (!group) return;
    var f = group.querySelector('[data-fp="follow"]');
    var p = group.querySelector('[data-fp="pin"]');
    if (f) f.setAttribute('aria-pressed', String(!pinned));
    if (p) p.setAttribute('aria-pressed', String(pinned));
  }

  /* ---------------- desk pane shells ---------------- */
  var deskShells = {};

  function buildDeskShell(paneId) {
    var def = RENDER.panes[paneId];
    var isBible = paneId === 'bible';
    var head = el('header', { class: 'pane-head' }, [
      el('h2', { class: 'pane-title' }, isBible ? 'BIBLE' : def.title),
      isBible ? el('span', { class: 'controller' }, 'CONTROLLER') : null,
      isBible ? null : el('div', { class: 'fp', role: 'group', 'aria-label': 'Follow or pin ' + def.title }, fpButtons(paneId))
    ]);
    var shell;
    if (isBible) {
      shell = el('section', { class: 'pane', 'aria-label': 'Bible', 'data-pane': 'bible' }, [
        head,
        el('div', { class: 'pane-body-wrap reader-anchor' })
      ]);
    } else {
      shell = el('section', { class: 'pane', 'aria-label': def.title, 'data-pane': paneId }, [
        head,
        el('div', { class: 'pinbar', hidden: true }),
        el('div', { class: 'pane-body-wrap' }),
        el('div', { class: 'stalebar', hidden: true }, [
          el('span', { class: 'stale-note' }),
          el('button', { class: 'resume', type: 'button' }, 'RESUME FOLLOW')
        ])
      ]);
      shell.querySelector('.resume').addEventListener('click', function () { state.unpin(paneId); });
    }
    deskShells[paneId] = shell;
    return shell;
  }

  function applyViewToShell(shell, paneId, view) {
    if (paneId === 'bible') return;
    shell.classList.toggle('pinned', view.pinned);
    var pinbar = shell.querySelector('.pinbar');
    pinbar.hidden = !view.pinned;
    clear(pinbar);
    if (view.pinned) {
      pinbar.appendChild(el('span', { class: 'pinbar-chip' }, 'PINNED · HELD AT ' + ctxSummary(view.context)));
    }
    var stale = shell.querySelector('.stalebar');
    stale.hidden = !view.stale;
    stale.querySelector('.stale-note').textContent =
      'NOT FOLLOWING. Selection has moved to ' + ctxSummary(state.currentContext()) + '.';
    setFpState(shell.querySelector('.fp'), view.pinned);
    var wrap = shell.querySelector('.pane-body-wrap');
    clear(wrap);
    wrap.appendChild(bodyFor(paneId, view.context));
  }

  /* ---------------- reader ---------------- */
  function refFor(n) {
    return { book: FIX.verses.code, chapter: FIX.verses.chapter, verseStart: n, verseEnd: n };
  }

  function emitToken(verse, part) {
    var token = part.token;
    var fields = { reference: refFor(verse.n), selectedText: part.text, tokenId: String(part.tokenIndex) };
    if (token.type === 'word') {
      fields.strongsId = token.strongsId;
      fields.lemmaId = FIX.words[token.strongsId].greek;
    } else {
      fields.placeId = token.placeId;
    }
    emitCtx(SEL.context(token.type, fields));
  }

  function verseRow(verse, selected) {
    var row = el('div', {
      class: 'verse' + (verse.woc ? ' woc' : '') + (selected ? ' selected' : ''),
      role: 'button',
      tabindex: '0',
      'data-verse': verse.n,
      'aria-current': selected ? 'true' : null
    });
    row.appendChild(el('span', { class: 'vnum' }, String(verse.n)));
    var text = el('span', { class: 'vtext' });
    if (verse.woc) text.appendChild(el('sup', { class: 'wocmark' }, '✝WoC'));
    RENDER.verseParts(verse).forEach(function (part) {
      if (part.supplied) {
        text.appendChild(el('i', { class: 'sup' }, part.text));
      } else if (part.token) {
        var t = el('button', {
          class: 'tok ' + part.token.type,
          type: 'button',
          'data-strongs': part.token.strongsId || null,
          'data-place': part.token.placeId || null
        }, part.text);
        t.addEventListener('click', function (ev) {
          ev.stopPropagation();
          emitToken(verse, part);
        });
        text.appendChild(t);
      } else {
        text.appendChild(document.createTextNode(part.text));
      }
    });
    row.appendChild(text);
    row.addEventListener('click', function () { emitVerse(verse.n); });
    row.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); emitVerse(verse.n); }
    });
    return row;
  }

  function readerFooter() {
    var prev = el('button', { class: 'nav-btn', type: 'button', 'aria-label': 'Previous verse' }, '◀ PREV VERSE');
    var next = el('button', { class: 'nav-btn', type: 'button', 'aria-label': 'Next verse' }, 'NEXT VERSE ▶');
    prev.addEventListener('click', function () { stepVerse(-1); });
    next.addEventListener('click', function () { stepVerse(1); });
    return el('footer', { class: 'reader-footer' }, [
      prev,
      el('span', { class: 'sync-note' }, syncNote()),
      next
    ]);
  }

  function readerBlock() {
    var current = state.currentContext();
    var selectedN = current && current.reference ? current.reference.verseStart : null;
    return el('div', { class: 'reader' }, [
      el('div', { class: 'chapter-panel' }, [
        el('p', { class: 'kicker' }, 'CHAPTER ' + FIX.verses.chapter),
        el('h2', { class: 'chap-title' }, FIX.verses.book.toUpperCase()),
        el('p', { class: 'chap-summary' }, FIX.verses.summary)
      ]),
      el('div', { class: 'verses', 'aria-label': 'Bible reader' }, FIX.verses.verses.map(function (v) {
        return verseRow(v, v.n === selectedN);
      })),
      el('div', { class: 'legend' }, [
        el('p', { class: 'legend-head' }, 'TAP A VERSE TO SET THE DESK SELECTION'),
        el('p', {}, [el('span', { class: 'cue word' }, 'study word'), ' — TAP FOR STRONG\'S']),
        el('p', {}, [el('span', { class: 'cue place' }, '◆ place'), ' — TAP FOR ATLAS']),
        el('p', {}, [el('i', { class: 'cue sup' }, 'italic'), ' — TRANSLATOR-SUPPLIED WORD']),
        el('p', {}, [el('span', { class: 'cue woc' }, '✝WoC'), ' — WORDS OF CHRIST'])
      ]),
      readerFooter()
    ]);
  }

  /* ---------------- mobile panel (tablet pane / phone drawer) ---------------- */
  var mobRoot = null;

  function buildTabs() {
    var tabs = el('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Study panes' });
    [['commentary', 'COMM'], ['word', 'WORD'], ['atlas', 'ATLAS'], ['xref', 'XREF']].forEach(function (pair) {
      var b = el('button', { class: 'tab', type: 'button', role: 'tab', 'data-mpane': pair[0] }, pair[1]);
      b.addEventListener('click', function () {
        ui.mobilePane = pair[0];
        renderMobilePanel();
      });
      tabs.appendChild(b);
    });
    return tabs;
  }

  function renderMobilePanel() {
    if (!mobRoot) return;
    var view = state.paneView(ui.mobilePane) || { context: null, pinned: false, stale: false };
    mobRoot.querySelectorAll('.tab').forEach(function (b) {
      var active = b.getAttribute('data-mpane') === ui.mobilePane;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    var pinbar = mobRoot.querySelector('.pinbar');
    clear(pinbar);
    pinbar.hidden = !view.pinned;
    if (view.pinned) pinbar.appendChild(el('span', { class: 'pinbar-chip' }, 'PINNED · HELD AT ' + ctxSummary(view.context)));
    var body = mobRoot.querySelector('.mpanel-body');
    clear(body);
    body.appendChild(bodyFor(ui.mobilePane, view.context));
    var fprow = mobRoot.querySelector('.fprow');
    clear(fprow);
    append(fprow, fpButtons(ui.mobilePane));
    setFpState(fprow, view.pinned);
  }

  function renderDrawer() {
    var d = document.getElementById('drawer');
    if (!d) return;
    d.classList.toggle('open', ui.drawerOpen);
    d.querySelector('.grab').setAttribute('aria-expanded', ui.drawerOpen ? 'true' : 'false');
    d.querySelector('.grab-toggle').textContent = ui.drawerOpen ? '▼ CLOSE' : '▲ OPEN';
    d.querySelector('.grab-name').textContent = RENDER.panes[ui.mobilePane].title;
    renderMobilePanel();
  }

  /* ---------------- screens ---------------- */
  function showScreen(name) {
    ui.screen = name;
    var screen = document.getElementById('screen');
    clear(screen);
    document.querySelectorAll('.navbtn[data-nav]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-nav') === name);
    });
    if (name === 'home') renderHome(screen);
    else if (name === 'reader') renderReader(screen);
    else if (name === 'desk') renderDesk(screen);
    else renderDiag(screen);
  }

  function renderHome(screen) {
    var shortcuts = [['reader', 'READER'], ['desk', 'STUDY DESK'], ['diag', 'DIAGNOSTICS']].map(function (pair) {
      return el('button', { class: 'home-btn', 'data-nav': pair[0], type: 'button' }, pair[1]);
    });
    screen.appendChild(el('div', { class: 'issue-card' }, [
      el('div', { class: 'masthead' }, [
        el('h1', { class: 'mast-logo' }, 'MANNA'),
        el('span', { class: 'mast-meta' }, 'NO. 01 / MATTHEW / OFFLINE')
      ]),
      el('div', { class: 'cover' }, [el('span', { class: 'cover-caption' }, 'cover art / 1024 × 640')]),
      el('button', { class: 'continue', 'data-nav': 'desk', type: 'button' }, [
        el('span', { class: 'continue-kicker' }, 'CONTINUE READING'),
        el('span', { class: 'continue-ref' }, 'MATTHEW 4:16')
      ]),
      el('div', { class: 'home-shortcuts' }, shortcuts)
    ]));
  }

  function renderReader(screen) {
    screen.appendChild(el('div', { class: 'reader-screen' }, [
      el('header', { class: 'loc-head' }, [
        el('h2', { class: 'loc' }, FIX.verses.book.toUpperCase() + ' · CHAPTER ' + FIX.verses.chapter),
        el('span', { class: 'badge-active' }, 'ACTIVE · ' + ctxSummary(state.currentContext()))
      ]),
      el('div', { class: 'reader-anchor' })
    ]));
    refreshReaderAnchors();
  }

  function renderDesk(screen) {
    clear(screen);
    var t = tier();
    deskShells = {};
    mobRoot = null;
    screen.appendChild(el('div', { class: 'desk-toolbar' }, [
      el('h1', { class: 'desk-title' }, 'STUDY DESK'),
      el('span', { class: 'badge-active' }, 'ACTIVE · ' + ctxSummary(state.currentContext()))
    ]));
    var body = el('div', { class: 'desk-body' });
    screen.appendChild(body);

    if (t === 'desk') {
      var grid = el('div', { class: 'panes-grid' });
      append(grid, [
        el('div', { class: 'col' }, [buildDeskShell('xref')]),
        el('div', { class: 'col' }, [buildDeskShell('bible')]),
        el('div', { class: 'col' }, [
          buildDeskShell('commentary'),
          buildDeskShell('word'),
          buildDeskShell('atlas')
        ])
      ]);
      body.appendChild(grid);
      ['xref', 'commentary', 'word', 'atlas'].forEach(function (id) {
        applyViewToShell(deskShells[id], id, state.paneView(id));
      });
      refreshReaderAnchors();
    } else if (t === 'tablet') {
      var toggle = el('button', { class: 'hide-pane', type: 'button' }, ui.tabletOpen ? 'HIDE STUDY PANE ▶' : '◀ SHOW STUDY PANE');
      var grid2 = el('div', { class: 'tablet-grid' + (ui.tabletOpen ? '' : ' collapsed') }, [
        el('div', { class: 'reader-col reader-anchor' }),
        el('div', { class: 'study-col' }, [
          buildTabs(),
          el('div', { class: 'pinbar', hidden: true }),
          el('div', { class: 'mpanel-body' }),
          el('div', { class: 'fprow', role: 'group', 'aria-label': 'Follow or pin' })
        ])
      ]);
      toggle.addEventListener('click', function () {
        ui.tabletOpen = !ui.tabletOpen;
        grid2.classList.toggle('collapsed', !ui.tabletOpen);
        toggle.textContent = ui.tabletOpen ? 'HIDE STUDY PANE ▶' : '◀ SHOW STUDY PANE';
        toggle.setAttribute('aria-expanded', ui.tabletOpen ? 'true' : 'false');
      });
      toggle.setAttribute('aria-expanded', ui.tabletOpen ? 'true' : 'false');
      body.appendChild(el('header', { class: 'tablet-header' }, [
        el('h2', { class: 'loc' }, FIX.verses.book.toUpperCase() + ' ' + FIX.verses.chapter),
        el('span', { class: 'badge-active' }, 'ACTIVE · ' + ctxSummary(state.currentContext())),
        toggle
      ]));
      body.appendChild(grid2);
      mobRoot = grid2.querySelector('.study-col');
      renderMobilePanel();
      refreshReaderAnchors();
    } else {
      var drawer = el('div', { class: 'drawer', id: 'drawer' }, [
        el('button', { class: 'grab', type: 'button', 'aria-expanded': ui.drawerOpen ? 'true' : 'false' }, [
          el('span', { class: 'handle' }),
          el('span', { class: 'grab-name' }, RENDER.panes[ui.mobilePane].title),
          el('span', { class: 'grab-toggle' }, ui.drawerOpen ? '▼ CLOSE' : '▲ OPEN')
        ]),
        buildTabs(),
        el('div', { class: 'pinbar', hidden: true }),
        el('div', { class: 'mpanel-body' }),
        el('div', { class: 'fprow', role: 'group', 'aria-label': 'Follow or pin' })
      ]);
      drawer.querySelector('.grab').addEventListener('click', function () {
        ui.drawerOpen = !ui.drawerOpen;
        renderDrawer();
      });
      body.appendChild(el('div', { class: 'phone-body' }, [
        el('header', { class: 'loc-head' }, [
          el('h2', { class: 'loc' }, FIX.verses.book.toUpperCase() + ' ' + FIX.verses.chapter),
          el('span', { class: 'badge-active' }, 'ACTIVE · ' + ctxSummary(state.currentContext()))
        ]),
        el('div', { class: 'reader-anchor' })
      ]));
      body.appendChild(drawer);
      mobRoot = drawer;
      renderDrawer();
      refreshReaderAnchors();
    }
  }

  function refreshReaderAnchors() {
    document.querySelectorAll('.reader-anchor').forEach(function (a) {
      clear(a);
      a.appendChild(readerBlock());
    });
  }

  function diagRows(pairs) {
    var dl = el('dl', { class: 'diag-rows' });
    pairs.forEach(function (pair) {
      dl.appendChild(el('dt', {}, pair[0]));
      dl.appendChild(el('dd', {}, pair[1]));
    });
    return dl;
  }

  function renderDiag(screen) {
    var meta = PLAT.meta();
    var caps = PLAT.capabilities();
    var perf = [
      ['BOOT TIME', bootMs === null ? '—' : bootMs + ' ms'],
      ['DOM NODES AFTER INITIAL RENDER', domNodes === null ? '—' : String(domNodes)],
      ['LAST SELECTION LATENCY', state.metrics.lastLatencyMs === null ? '—' : state.metrics.lastLatencyMs + ' ms']
    ];
    if (typeof performance !== 'undefined' && performance.memory && performance.memory.usedJSHeapSize) {
      perf.push(['HEAP USED (CHROMIUM)', Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB']);
    }
    screen.appendChild(el('div', { class: 'diag' }, [
      el('h1', { class: 'diag-title' }, 'DIAGNOSTICS'),
      el('div', { class: 'diag-grid' }, [
        el('section', { class: 'diag-card', 'aria-label': 'Build' }, [
          el('h2', {}, 'BUILD'),
          diagRows([
            ['APP VERSION', meta.appVersion],
            ['BUILD ID', meta.buildId],
            ['SHA-256 (DIGEST FIELD BLANKED)', meta.sha256Embedded],
            ['SOURCE FILES', String(meta.sourceFiles)]
          ]),
          el('p', { class: 'diag-note' }, '* Computed over the artifact with its digest field blanked — a file cannot contain its own SHA-256. The artifact\'s true SHA-256 is recorded in BUILD-MANIFEST.json and manna.html.sha256.')
        ]),
        el('section', { class: 'diag-card', 'aria-label': 'Runtime capabilities' }, [
          el('h2', {}, 'RUNTIME CAPABILITIES'),
          diagRows([
            ['PROTOCOL', caps.protocol || '—'],
            ['ONLINE', caps.online === null ? '—' : (caps.online ? 'YES' : 'NO')],
            ['POINTER', caps.touch ? 'TOUCH' : 'FINE'],
            ['REDUCED MOTION', caps.reducedMotion ? 'PREFERRED' : 'NOT PREFERRED'],
            ['STORAGE', caps.storage],
            ['VIEWPORT', caps.viewport.w + ' × ' + caps.viewport.h]
          ])
        ]),
        el('section', { class: 'diag-card', 'aria-label': 'Performance' }, [
          el('h2', {}, 'PERFORMANCE'),
          diagRows(perf)
        ]),
        el('section', { class: 'diag-card', 'aria-label': 'Selection trace' }, [
          el('h2', {}, 'SELECTION TRACE'),
          el('div', { id: 'trace' })
        ])
      ])
    ]));
    renderTrace();
  }

  function fmtClock(ts) {
    var d = new Date(ts);
    function pad(x) { return (x < 10 ? '0' : '') + x; }
    var ms = d.getMilliseconds();
    return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' +
      (ms < 100 ? '0' : '') + (ms < 10 ? '0' : '') + ms;
  }

  function renderTrace() {
    var box = document.getElementById('trace');
    if (!box) return;
    clear(box);
    if (!trace.length) {
      box.appendChild(el('p', { class: 'pane-empty' }, 'NO SELECTIONS YET'));
      return;
    }
    trace.forEach(function (row) {
      box.appendChild(el('div', { class: 'trace-row' }, [
        el('span', { class: 'trace-time' }, fmtClock(row.ts)),
        el('span', { class: 'trace-text' }, row.text)
      ]));
    });
  }

  /* ---------------- selection emission ---------------- */
  function emitVerse(n) {
    emitCtx(SEL.context('verse', {
      reference: refFor(n),
      selectedText: verseByN(n).text,
      sourceModule: 'PCE-KJV'
    }));
  }

  function emitCtx(ctx) {
    var t = tier();
    if (t !== 'desk') {
      if (ctx.type === 'word') { ui.mobilePane = 'word'; ui.drawerOpen = true; }
      else if (ctx.type === 'place') { ui.mobilePane = 'atlas'; ui.drawerOpen = true; }
    }
    service.emit(ctx);
    if (t === 'phone') renderDrawer();
  }

  function stepVerse(delta) {
    var current = state.currentContext();
    var base = current && current.reference ? current.reference.verseStart : 16;
    var verses = FIX.verses.verses;
    var n = Math.max(verses[0].n, Math.min(verses[verses.length - 1].n, base + delta));
    emitVerse(n);
  }

  /* ---------------- chrome (badge, sync notes, trace) ---------------- */
  function updateChrome() {
    var summary = 'ACTIVE · ' + ctxSummary(state.currentContext());
    document.querySelectorAll('.badge-active').forEach(function (b) { b.textContent = summary; });
    document.querySelectorAll('.sync-note').forEach(function (b) { b.textContent = syncNote(); });
    refreshReaderAnchors();
    if (ui.screen === 'diag') {
      var current = state.currentContext();
      if (current) {
        trace.unshift({ ts: current.timestamp, text: ctxSummary(current) });
        if (trace.length > 6) trace.pop();
      }
      renderTrace();
    }
  }

  /* ---------------- boot ---------------- */
  var service, state, ui;
  var trace = [];
  var bootMs = null, domNodes = null;

  function tier() {
    var w = document.documentElement.clientWidth;
    return w >= 1150 ? 'desk' : w >= 640 ? 'tablet' : 'phone';
  }

  function boot(rootEl, opts) {
    var bootStart = performance.now();
    service = opts.service;
    state = opts.state;
    ui = { screen: 'home', mobilePane: 'commentary', drawerOpen: false, tabletOpen: true };

    rootEl.appendChild(el('header', { class: 'topbar' }, [
      el('button', { class: 'brand navbtn', 'data-nav': 'home', type: 'button' }, 'MANNA'),
      el('nav', { class: 'topnav', 'aria-label': 'Primary' }, [
        el('button', { class: 'navbtn', 'data-nav': 'home', type: 'button' }, 'HOME'),
        el('button', { class: 'navbtn', 'data-nav': 'reader', type: 'button' }, 'READER'),
        el('button', { class: 'navbtn', 'data-nav': 'desk', type: 'button' }, 'STUDY DESK'),
        el('button', { class: 'navbtn', 'data-nav': 'diag', type: 'button' }, 'DIAGNOSTICS')
      ])
    ]));
    rootEl.appendChild(el('main', { id: 'screen' }));
    rootEl.appendChild(el('nav', { class: 'bottomnav', 'aria-label': 'Primary' }, [
      el('button', { class: 'navbtn', 'data-nav': 'home', type: 'button' }, 'HOME'),
      el('button', { class: 'navbtn', 'data-nav': 'reader', type: 'button' }, 'READ'),
      el('button', { class: 'navbtn', 'data-nav': 'desk', type: 'button' }, 'STUDY'),
      el('button', { class: 'navbtn', 'data-nav': 'diag', type: 'button' }, 'DIAG')
    ]));

    document.addEventListener('click', function (ev) {
      var b = ev.target.closest ? ev.target.closest('[data-nav]') : null;
      if (b) showScreen(b.getAttribute('data-nav'));
    });

    Object.keys(RENDER.panes).forEach(function (id) {
      state.registerPane(RENDER.panes[id], function (view) {
        var shell = deskShells[id];
        if (shell) applyViewToShell(shell, id, view);
        if (ui.mobilePane === id) renderMobilePanel();
      });
    });

    state.onChange(updateChrome);

    showScreen('home');

    // Initial selection — the desk opens with Matthew 4:16 active (§36 demo).
    emitVerse(16);

    bootMs = Math.round(performance.now() - bootStart);
    domNodes = document.querySelectorAll('*').length;

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        if (ui.screen === 'desk') renderDesk(document.getElementById('screen'));
      }, 150);
    });
  }

  APP.dom = { boot: boot };
})(typeof window !== 'undefined' ? window : globalThis);
