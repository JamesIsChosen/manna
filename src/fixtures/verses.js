/* P0.1 Scripture fixture — Matthew 4:12-17 (KJV, Pure Cambridge Edition).
 * Source of truth for the text is the installed module, recorded in
 * fixtures/matthew-4-12-17.md. Token offsets are into `text` and verified by
 * test/render.test.js. Supplied-word ranges (v15 "by") mark words supplied by
 * the translators with no counterpart in the underlying Greek; rebuilding the
 * source form (bracketing those ranges) reproduces the module byte for byte. */
(function (g) {
  'use strict';
  var FIX = (g.Manna = g.Manna || {}).fixtures = g.Manna.fixtures || {};

  FIX.verses = {
    book: 'Matthew',
    code: 'MAT',
    chapter: 4,
    summary: 'Jesus withdraws to Galilee; the light dawns on the region of Zebulun and Naphtali.',
    verses: [
      {
        n: 12,
        text: 'Now when Jesus had heard that John was cast into prison, he departed into Galilee;',
        tokens: [{ start: 74, end: 81, type: 'place', placeId: 'galilee' }],
        supplied: []
      },
      {
        n: 13,
        text: 'And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:',
        tokens: [
          { start: 12, end: 20, type: 'place', placeId: 'nazareth' },
          { start: 43, end: 52, type: 'place', placeId: 'capernaum' }
        ],
        supplied: []
      },
      {
        n: 14,
        text: 'That it might be fulfilled which was spoken by Esaias the prophet, saying,',
        tokens: [],
        supplied: []
      },
      {
        n: 15,
        text: 'The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles;',
        tokens: [{ start: 87, end: 94, type: 'place', placeId: 'galilee' }],
        supplied: [{ start: 49, end: 51 }]
      },
      {
        n: 16,
        text: 'The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.',
        tokens: [
          { start: 43, end: 48, type: 'word', strongsId: 'G5457' },
          { start: 106, end: 111, type: 'word', strongsId: 'G5457' }
        ],
        supplied: []
      },
      {
        n: 17,
        text: 'From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.',
        tokens: [{ start: 66, end: 73, type: 'word', strongsId: 'G932' }],
        supplied: [],
        woc: true
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
