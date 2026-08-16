/* Editorial fixture — per-verse commentary for Matthew 4:12-17.
 * Fixture contract: the COM object in docs/01-spec/design-reference/. */
(function (g) {
  'use strict';
  var FIX = (g.Manna = g.Manna || {}).fixtures = g.Manna.fixtures || {};

  FIX.commentary = {
    12: "When Jesus hears that John is imprisoned he withdraws north. Matthew marks a handover: the forerunner's voice falls silent and the ministry it announced begins.",
    13: "Leaving Nazareth for Capernaum moves Jesus from an inland hill village to a lakeside customs and fishing town on the trade road — a place where news travelled.",
    14: "A formula quotation. Matthew reads the move north as deliberate fulfilment of Isaiah rather than as a retreat from danger.",
    15: "Zebulun and Naphtali were the first territories carried off by Assyria. The region longest under foreign shadow is the one named first for light.",
    16: "The light does not arrive somewhere else and summon the people to it; it rises where they already sit. Isaiah's image of dawn over occupied territory is applied to Galilee.",
    17: "The first recorded word of the ministry is 'Repent'. The reason given is not judgement but proximity: the kingdom has come near."
  };
})(typeof window !== 'undefined' ? window : globalThis);
