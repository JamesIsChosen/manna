/* Editorial fixture — Strong's entries for the tagged words of Matthew 4:12-17.
 * Fixture contract: the WORDS object in docs/01-spec/design-reference/. */
(function (g) {
  'use strict';
  var FIX = (g.Manna = g.Manna || {}).fixtures = g.Manna.fixtures || {};

  FIX.words = {
    G5457: {
      greek: 'φῶς',
      tr: 'phōs',
      morph: 'Noun · neuter',
      occ: 73,
      gloss: 'Light: the medium by which things are made visible, and by extension revelation, moral clarity, and the presence of God.',
      from: 'Matthew 4:16',
      rel: ['G5458 φωστήρ', 'G5461 φωτίζω', 'G5462 φωτισμός']
    },
    G932: {
      greek: 'βασιλεία',
      tr: 'basileia',
      morph: 'Noun · feminine',
      occ: 162,
      gloss: 'Kingdom, reign, royal rule. In Matthew it is the active rule of God breaking into the present rather than a territory on a map.',
      from: 'Matthew 4:17',
      rel: ['G935 βασιλεύς', 'G936 βασιλεύω', 'G933 βασίλειον']
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
