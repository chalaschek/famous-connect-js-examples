/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var angle = 0;

  var centerModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform: Transform.translate(100, 200)
  });

  var square = new Surface({
    size: [200, 200],
    classes: ['backfaceVisibility', 'blue-background']
  });

  mainContext.add(centerModifier).add(square);
});
