'use strict';
/* Fixture integrity (R5) and the pure render models. The source-of-truth text
 * is fixtures/matthew-4-12-17.md (recorded from the PCE-KJV module); these
 * tests prove the fixture data reproduces it byte for byte once the
 * supplied-word representation is accounted for (roadmap criterion 15). */
const { test } = require('node:test');
const assert = require('node:assert');
const H = require('./helpers.js');

const FIX = H.Manna.fixtures;
const RENDER = H.APP.render;

// Verbatim from fixtures/matthew-4-12-17.md — the recorded source module.
const SOURCE_LINES = {
  12: 'Now when Jesus had heard that John was cast into prison, he departed into Galilee;',
  13: 'And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:',
  14: 'That it might be fulfilled which was spoken by Esaias the prophet, saying,',
  15: 'The land of Zabulon, and the land of Nephthalim, [by] the way of the sea, beyond Jordan, Galilee of the Gentiles;',
  16: 'The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.',
  17: 'From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.'
};

function sourceForm(verse) {
  let out = '';
  let last = 0;
  (verse.supplied || []).slice().sort((a, b) => a.start - b.start).forEach((r) => {
    out += verse.text.slice(last, r.start) + '[' + verse.text.slice(r.start, r.end) + ']';
    last = r.end;
  });
  return out + verse.text.slice(last);
}

test('fixture: every verse reconstructs the source module byte for byte', () => {
  FIX.verses.verses.forEach((verse) => {
    assert.strictEqual(sourceForm(verse), SOURCE_LINES[verse.n],
      'verse ' + verse.n + ' does not match the recorded source text');
  });
});

// The tagged surfaces from fixtures/matthew-4-12-17.md.
const WORD_SURFACES = { G5457: 'light', G932: 'kingdom' };

test('fixture: token offsets slice to the tagged surfaces', () => {
  FIX.verses.verses.forEach((verse) => {
    (verse.tokens || []).forEach((t) => {
      const surface = verse.text.slice(t.start, t.end);
      if (t.type === 'word') {
        assert.strictEqual(surface, WORD_SURFACES[t.strongsId], 'v' + verse.n + ' word token ' + t.strongsId);
        assert.ok(FIX.words[t.strongsId], 'Strong\'s entry ' + t.strongsId + ' exists');
      } else {
        assert.strictEqual(t.type, 'place');
        assert.ok(FIX.places[t.placeId], 'place record ' + t.placeId + ' exists');
      }
    });
  });
});

test('fixture: supplied-word ranges mark only the translator-supplied word', () => {
  const v15 = FIX.verses.verses.find((v) => v.n === 15);
  assert.deepStrictEqual(v15.supplied.map((r) => v15.text.slice(r.start, r.end)), ['by']);
  FIX.verses.verses.forEach((verse) => {
    if (verse.n !== 15) assert.strictEqual((verse.supplied || []).length, 0);
  });
});

test('fixture: no token or supplied range overlaps another', () => {
  FIX.verses.verses.forEach((verse) => {
    const marks = (verse.supplied || []).concat(verse.tokens || []);
    marks.sort((a, b) => a.start - b.start);
    for (let i = 1; i < marks.length; i++) {
      assert.ok(marks[i].start >= marks[i - 1].end,
        'v' + verse.n + ' overlapping marks ' + JSON.stringify(marks));
    }
    marks.forEach((m) => assert.ok(m.end <= verse.text.length, 'v' + verse.n + ' range out of bounds'));
  });
});

test('fixture: only word and place tokens exist (P0.1 contract §35)', () => {
  FIX.verses.verses.forEach((verse) => {
    (verse.tokens || []).forEach((t) => {
      assert.ok(t.type === 'word' || t.type === 'place', 'unexpected token type ' + t.type);
    });
  });
});

test('fixture: Words of Christ metadata covers verse 17 only', () => {
  FIX.verses.verses.forEach((verse) => {
    assert.strictEqual(Boolean(verse.woc), verse.n === 17);
  });
});

test('render: verseParts marks supplied words and tokens distinctly', () => {
  const v15 = FIX.verses.verses.find((v) => v.n === 15);
  const parts = RENDER.verseParts(v15);
  assert.deepStrictEqual(parts.map((p) => ({ t: p.text, s: !!p.supplied, tok: !!p.token })), [
    { t: 'The land of Zabulon, and the land of Nephthalim, ', s: false, tok: false },
    { t: 'by', s: true, tok: false },
    { t: ' the way of the sea, beyond Jordan, ', s: false, tok: false },
    { t: 'Galilee', s: false, tok: true },
    { t: ' of the Gentiles;', s: false, tok: false }
  ]);
});

test('render: verseParts joins back to the exact verse text', () => {
  FIX.verses.verses.forEach((verse) => {
    const joined = RENDER.verseParts(verse).map((p) => p.text).join('');
    assert.strictEqual(joined, verse.text);
  });
});

test('render: verse 16 yields both light tokens with their Strong\'s ids', () => {
  const v16 = FIX.verses.verses.find((v) => v.n === 16);
  const tokens = RENDER.verseParts(v16).filter((p) => p.token);
  assert.strictEqual(tokens.length, 2);
  assert.deepStrictEqual(tokens.map((p) => p.token.strongsId), ['G5457', 'G5457']);
});

test('render: commentary model names the selected verse', () => {
  const m = RENDER.panes.commentary.model(H.verseCtx(16));
  assert.strictEqual(m.ref, 'MATTHEW 4:16');
  assert.strictEqual(m.body, FIX.commentary[16]);
  assert.ok(m.kicker.includes('NOT SCRIPTURE'));
});

test('render: xref model lists the rows for the selected verse', () => {
  const m = RENDER.panes.xref.model(H.verseCtx(16));
  assert.strictEqual(m.kicker, 'SHOWING FOR MATTHEW 4:16');
  assert.strictEqual(m.rows.length, FIX.crossrefs[16].length);
});

test('render: word model carries the full Strong\'s entry', () => {
  const m = RENDER.panes.word.model(H.wordCtx('G5457', 16));
  assert.strictEqual(m.chip, 'G5457');
  assert.strictEqual(m.greek, 'φῶς');
  assert.strictEqual(m.tr, 'phōs');
  assert.ok(m.morph.includes('NOUN · NEUTER'));
  assert.ok(m.morph.includes('73 OCCURRENCES'));
  assert.strictEqual(m.from, 'MATTHEW 4:16');
  assert.strictEqual(m.rel.length, 3);
});

test('render: atlas model carries the place record', () => {
  const m = RENDER.panes.atlas.model(H.placeCtx('capernaum', 13));
  assert.strictEqual(m.placeId, 'capernaum');
  assert.strictEqual(m.name, 'Capernaum');
  assert.ok(m.desc.length > 0);
  assert.strictEqual(m.facts.length, 3);
});

test('render: fmtRef formats single verses and ranges', () => {
  assert.strictEqual(RENDER.ref({ book: 'MAT', chapter: 4, verseStart: 16, verseEnd: 16 }), 'MATTHEW 4:16');
  assert.strictEqual(RENDER.ref({ book: 'MAT', chapter: 4, verseStart: 28, verseEnd: 39 }), 'MATTHEW 4:28–39');
  assert.strictEqual(RENDER.ref(null), '');
});
