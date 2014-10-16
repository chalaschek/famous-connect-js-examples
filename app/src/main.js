/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var centerModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  });

  var square = new Surface({
    size: [200, 200],
    properties: {
      backgroundColor: '#cccccc'
    }
  });

  mainContext.add(centerModifier).add( square );
});
