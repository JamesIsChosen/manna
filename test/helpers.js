'use strict';
/* Shared harness for the selection tests — re-exported from the selection
 * probe (scripts/probe-selection.js), which wires the real SelectionService,
 * StudyState, and pane definitions exactly as the browser wires them and
 * doubles as the criterion-11 fail-closed CLI. */
module.exports = require('../scripts/probe-selection.js');
