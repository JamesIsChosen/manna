/* Manna P0.1 fixture — Matthew 4:12–17, KJV Pure Cambridge Edition.
 *
 * Scripture text source: fixtures/matthew-4-12-17.md, extracted 2026-08-15 from
 * PCE-KJV-BIBLE.md (BibleProtector.com). Editorial data source: the COM, XREF,
 * WORDS and PLACES objects in docs/01-spec/design-reference/Study Desk.dc.html
 * — the accepted fixture contract for P0.1.
 *
 * Editorial data is NOT Scripture. PEOPLE/TOPICS/NOTES have no pane in P0.1
 * (packet §51) so their contract objects are not carried here.
 *
 * Verse text is stored as a token stream so study annotations survive; plainText
 * reconstructs the source bytes. Translator-supplied words (KJV convention:
 * square brackets in plain text, italics in print) are token type `supplied`
 * and reconstruct WITH brackets, so the data matches the source module
 * byte-for-byte. Words of Christ carry explicit `speaker: 'jesus'` metadata on
 * the tokens; nothing is inferred from punctuation.
 */
(function (M) {
  'use strict';

  var VERSES = {
    12: { tokens: [
      { t: 'text', s: 'Now when Jesus had heard that John was cast into prison, he departed into ' },
      { t: 'place', s: 'Galilee', placeId: 'galilee' },
      { t: 'text', s: ';' }
    ] },
    13: { tokens: [
      { t: 'text', s: 'And leaving ' },
      { t: 'place', s: 'Nazareth', placeId: 'nazareth' },
      { t: 'text', s: ', he came and dwelt in ' },
      { t: 'place', s: 'Capernaum', placeId: 'capernaum' },
      { t: 'text', s: ', which is upon the sea coast, in the borders of Zabulon and Nephthalim:' }
    ] },
    14: { tokens: [
      { t: 'text', s: 'That it might be fulfilled which was spoken by Esaias the prophet, saying,' }
    ] },
    15: { tokens: [
      { t: 'text', s: 'The land of Zabulon, and the land of Nephthalim, ' },
      { t: 'supplied', s: 'by' },
      { t: 'text', s: ' the way of the sea, beyond Jordan, ' },
      { t: 'place', s: 'Galilee', placeId: 'galilee' },
      { t: 'text', s: ' of the Gentiles;' }
    ] },
    16: { tokens: [
      { t: 'text', s: 'The people which sat in darkness saw great ' },
      { t: 'word', s: 'light', strongsId: 'G5457' },
      { t: 'text', s: '; and to them which sat in the region and shadow of death ' },
      { t: 'word', s: 'light', strongsId: 'G5457' },
      { t: 'text', s: ' is sprung up.' }
    ] },
    17: { tokens: [
      { t: 'text', s: 'From that time Jesus began to preach, and to say, ' },
      { t: 'text', s: 'Repent: for the ', speaker: 'jesus' },
      { t: 'word', s: 'kingdom', strongsId: 'G932', speaker: 'jesus' },
      { t: 'text', s: ' of heaven is at hand.', speaker: 'jesus' }
    ] }
  };

  // Editorial fixture data — verbatim from the design reference contract.
  // These objects are editorial content, not Scripture.
  var COM = {
    12: "When Jesus hears that John is imprisoned he withdraws north. Matthew marks a handover: the forerunner's voice falls silent and the ministry it announced begins.",
    13: "Leaving Nazareth for Capernaum moves Jesus from an inland hill village to a lakeside customs and fishing town on the trade road — a place where news travelled.",
    14: "A formula quotation. Matthew reads the move north as deliberate fulfilment of Isaiah rather than as a retreat from danger.",
    15: "Zebulun and Naphtali were the first territories carried off by Assyria. The region longest under foreign shadow is the one named first for light.",
    16: "The light does not arrive somewhere else and summon the people to it; it rises where they already sit. Isaiah's image of dawn over occupied territory is applied to Galilee.",
    17: "The first recorded word of the ministry is 'Repent'. The reason given is not judgement but proximity: the kingdom has come near."
  };

  var XREF = {
    12: [{ ref: 'Mark 1:14', text: 'Now after that John was put in prison, Jesus came into Galilee.' }, { ref: 'Luke 3:19–20', text: 'Herod shut up John in prison.' }, { ref: 'John 4:1–3', text: 'He left Judaea, and departed again into Galilee.' }],
    13: [{ ref: 'Matt 9:1', text: 'He came into his own city.' }, { ref: 'Luke 4:31', text: 'And came down to Capernaum, a city of Galilee.' }, { ref: 'Josh 19:10–16', text: 'The inheritance of the children of Zebulun.' }],
    14: [{ ref: 'Isa 9:1', text: 'Afterward did more grievously afflict her by the way of the sea.' }, { ref: 'Matt 1:22', text: 'That it might be fulfilled which was spoken of the Lord.' }],
    15: [{ ref: 'Isa 9:1', text: 'The land of Zebulun and the land of Naphtali.' }, { ref: '1 Kings 9:11', text: 'Twenty cities in the land of Galilee.' }],
    16: [{ ref: 'Isa 9:2', text: 'The people that walked in darkness have seen a great light.' }, { ref: 'Luke 1:79', text: 'To give light to them that sit in darkness.' }, { ref: 'John 8:12', text: 'I am the light of the world.' }, { ref: 'Eph 5:14', text: 'Christ shall give thee light.' }],
    17: [{ ref: 'Mark 1:15', text: 'The time is fulfilled, and the kingdom of God is at hand.' }, { ref: 'Matt 3:2', text: 'Repent ye: for the kingdom of heaven is at hand.' }, { ref: 'Matt 10:7', text: 'Preach, saying, The kingdom of heaven is at hand.' }, { ref: 'Acts 2:38', text: 'Repent, and be baptized every one of you.' }]
  };

  var WORDS = {
    G5457: { greek: 'φῶς', tr: 'phōs', morph: 'Noun · neuter', occ: 73, gloss: 'Light: the medium by which things are made visible, and by extension revelation, moral clarity, and the presence of God.', from: 'Matthew 4:16', rel: ['G5458 φωστήρ', 'G5461 φωτίζω', 'G5462 φωτισμός'] },
    G932: { greek: 'βασιλεία', tr: 'basileia', morph: 'Noun · feminine', occ: 162, gloss: 'Kingdom, reign, royal rule. In Matthew it is the active rule of God breaking into the present rather than a territory on a map.', from: 'Matthew 4:17', rel: ['G935 βασιλεύς', 'G936 βασιλεύω', 'G933 βασίλειον'] }
  };

  var PLACES = {
    galilee: { name: 'Galilee', desc: 'Northern region of Roman Palestine, densely populated and mixed in language and trade.', facts: ['REGION · NORTH', 'ROADS TO DAMASCUS & THE COAST', 'ISA 9:1 — "GALILEE OF THE NATIONS"'] },
    nazareth: { name: 'Nazareth', desc: 'Small hill town in lower Galilee, roughly 25 km south-west of Capernaum.', facts: ['VILLAGE · EST. POP. 400', 'NO OT MENTION', 'LEFT IN MATT 4:13'] },
    capernaum: { name: 'Capernaum', desc: 'Fishing and customs town on the north shore of the Sea of Galilee; base of the Galilean ministry.', facts: ['TOWN · LAKESIDE', 'CUSTOMS POST ON THE VIA MARIS', 'CALLED "HIS OWN CITY" — MATT 9:1'] }
  };

  // Schematic atlas dot positions, percent of map cell (x, y) — design reference DOTS.
  var DOTS = { galilee: [26, 24], nazareth: [20, 66], capernaum: [56, 33] };

  var MODULE = {
    id: 'KJV-PCE',
    title: 'King James Version — Pure Cambridge Edition',
    language: 'en',
    formatVersion: 1,
    reference: { book: 'MAT', bookName: 'MATTHEW', chapter: 4, verseStart: 12, verseEnd: 17 },
    chapterSummary: 'Jesus leaves Nazareth for Capernaum and begins to preach.'
  };

  function tokensOf(verseNum) {
    return (VERSES[verseNum] || { tokens: [] }).tokens;
  }

  // Reconstruct the source-module line. Supplied words are wrapped in brackets,
  // exactly as the PCE plain-text source carries them.
  function plainText(verseNum) {
    return tokensOf(verseNum).map(function (tok) {
      return tok.t === 'supplied' ? '[' + tok.s + ']' : tok.s;
    }).join('');
  }

  M.fixtures = {
    module: MODULE,
    verses: VERSES,
    tokensOf: tokensOf,
    plainText: plainText,
    words: WORDS,
    places: PLACES,
    dots: DOTS,
    com: COM,
    xref: XREF
  };
})(globalThis.Manna = globalThis.Manna || {});
