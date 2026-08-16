/* Editorial fixture — place records and schematic map positions.
 * Fixture contract: the PLACES and DOTS objects in docs/01-spec/design-reference/.
 * Dot positions are percentages within the atlas map cell. */
(function (g) {
  'use strict';
  var FIX = (g.Manna = g.Manna || {}).fixtures = g.Manna.fixtures || {};

  FIX.places = {
    galilee: {
      name: 'Galilee',
      desc: 'Northern region of Roman Palestine, densely populated and mixed in language and trade.',
      facts: ['REGION · NORTH', 'ROADS TO DAMASCUS & THE COAST', 'ISA 9:1 — "GALILEE OF THE NATIONS"']
    },
    nazareth: {
      name: 'Nazareth',
      desc: 'Small hill town in lower Galilee, roughly 25 km south-west of Capernaum.',
      facts: ['VILLAGE · EST. POP. 400', 'NO OT MENTION', 'LEFT IN MATT 4:13']
    },
    capernaum: {
      name: 'Capernaum',
      desc: 'Fishing and customs town on the north shore of the Sea of Galilee; base of the Galilean ministry.',
      facts: ['TOWN · LAKESIDE', 'CUSTOMS POST ON THE VIA MARIS', 'CALLED "HIS OWN CITY" — MATT 9:1']
    }
  };

  FIX.dots = { galilee: [26, 24], nazareth: [20, 66], capernaum: [56, 33] };

  // Schematic Sea of Galilee ellipse: [x, y, w, h] as percentages of the map cell.
  FIX.sea = { x: 42, y: 47, w: 24, h: 26 };
})(typeof window !== 'undefined' ? window : globalThis);
