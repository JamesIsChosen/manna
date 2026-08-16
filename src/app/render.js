/* Pure render models — no DOM. Pane definitions declare which selection types
 * they understand (§16 capability matching); models turn a SelectionContext
 * into plain content objects that the DOM layer applies. Everything here is
 * exercised directly by test/render.test.js. */
(function (g) {
  'use strict';
  var FIX = g.Manna.fixtures;
  var APP = (g.Manna = g.Manna || {}).app = g.Manna.app || {};

  // Full names for the book codes the fixtures use; grows with P2 (Scripture
  // reader). Unknown codes fall back to the code itself, uppercased.
  var BOOK_NAMES = { MAT: 'MATTHEW' };

  function fmtRef(ref) {
    if (!ref) return '';
    var code = (ref.book || '').toUpperCase();
    var book = BOOK_NAMES[code] || code;
    if (ref.verseEnd && ref.verseEnd !== ref.verseStart) {
      return book + ' ' + ref.chapter + ':' + ref.verseStart + '–' + ref.verseEnd;
    }
    return book + ' ' + ref.chapter + ':' + ref.verseStart;
  }

  APP.render = {
    ref: fmtRef,

    panes: {
      commentary: {
        id: 'commentary',
        title: 'COMMENTARY',
        accepts: ['verse', 'passage'],
        model: function (ctx) {
          return {
            kicker: 'EDITORIAL NOTE — NOT SCRIPTURE',
            ref: fmtRef(ctx.reference),
            body: FIX.commentary[ctx.reference.verseStart]
          };
        }
      },
      xref: {
        id: 'xref',
        title: 'CROSS REFS',
        accepts: ['verse', 'passage'],
        model: function (ctx) {
          return {
            kicker: 'SHOWING FOR ' + fmtRef(ctx.reference),
            rows: FIX.crossrefs[ctx.reference.verseStart]
          };
        }
      },
      word: {
        id: 'word',
        title: 'WORD STUDY',
        accepts: ['word', 'strongs'],
        model: function (ctx) {
          var entry = FIX.words[ctx.strongsId];
          return {
            strongsId: ctx.strongsId,
            chip: ctx.strongsId,
            greek: entry.greek,
            tr: entry.tr,
            morph: entry.morph.toUpperCase() + ' · ' + entry.occ + ' OCCURRENCES',
            gloss: entry.gloss,
            from: entry.from.toUpperCase(),
            rel: entry.rel
          };
        }
      },
      atlas: {
        id: 'atlas',
        title: 'ATLAS',
        accepts: ['place'],
        model: function (ctx) {
          return {
            placeId: ctx.placeId,
            name: FIX.places[ctx.placeId].name,
            desc: FIX.places[ctx.placeId].desc,
            facts: FIX.places[ctx.placeId].facts
          };
        }
      }
    },

    /* Split a verse's text into renderable parts: plain text, supplied words
     * (criterion 15 — visually distinct, kept in the data model), and tagged
     * tokens (study words and places). Tokens are real buttons in the DOM;
     * supplied words are marked segments here. */
    verseParts: function (verse) {
      var marks = [];
      (verse.supplied || []).forEach(function (r) {
        marks.push({ start: r.start, end: r.end, supplied: true });
      });
      (verse.tokens || []).forEach(function (t, i) {
        marks.push({ start: t.start, end: t.end, token: t, index: i });
      });
      marks.sort(function (a, b) { return a.start - b.start; });

      var parts = [];
      var cursor = 0;
      marks.forEach(function (m) {
        if (m.start > cursor) parts.push({ text: verse.text.slice(cursor, m.start) });
        var text = verse.text.slice(m.start, m.end);
        if (m.supplied) {
          parts.push({ text: text, supplied: true });
        } else {
          parts.push({ text: text, token: m.token, tokenIndex: m.index });
        }
        cursor = m.end;
      });
      if (cursor < verse.text.length) parts.push({ text: verse.text.slice(cursor) });
      return parts;
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
