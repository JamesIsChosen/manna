/* Editorial fixture — per-verse cross references for Matthew 4:12-17.
 * Fixture contract: the XREF object in docs/01-spec/design-reference/. */
(function (g) {
  'use strict';
  var FIX = (g.Manna = g.Manna || {}).fixtures = g.Manna.fixtures || {};

  FIX.crossrefs = {
    12: [
      { ref: 'Mark 1:14', text: 'Now after that John was put in prison, Jesus came into Galilee.' },
      { ref: 'Luke 3:19–20', text: 'Herod shut up John in prison.' },
      { ref: 'John 4:1–3', text: 'He left Judaea, and departed again into Galilee.' }
    ],
    13: [
      { ref: 'Matt 9:1', text: 'He came into his own city.' },
      { ref: 'Luke 4:31', text: 'And came down to Capernaum, a city of Galilee.' },
      { ref: 'Josh 19:10–16', text: 'The inheritance of the children of Zebulun.' }
    ],
    14: [
      { ref: 'Isa 9:1', text: 'Afterward did more grievously afflict her by the way of the sea.' },
      { ref: 'Matt 1:22', text: 'That it might be fulfilled which was spoken of the Lord.' }
    ],
    15: [
      { ref: 'Isa 9:1', text: 'The land of Zebulun and the land of Naphtali.' },
      { ref: '1 Kings 9:11', text: 'Twenty cities in the land of Galilee.' }
    ],
    16: [
      { ref: 'Isa 9:2', text: 'The people that walked in darkness have seen a great light.' },
      { ref: 'Luke 1:79', text: 'To give light to them that sit in darkness.' },
      { ref: 'John 8:12', text: 'I am the light of the world.' },
      { ref: 'Eph 5:14', text: 'Christ shall give thee light.' }
    ],
    17: [
      { ref: 'Mark 1:15', text: 'The time is fulfilled, and the kingdom of God is at hand.' },
      { ref: 'Matt 3:2', text: 'Repent ye: for the kingdom of heaven is at hand.' },
      { ref: 'Matt 10:7', text: 'Preach, saying, The kingdom of heaven is at hand.' },
      { ref: 'Acts 2:38', text: 'Repent, and be baptized every one of you.' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
