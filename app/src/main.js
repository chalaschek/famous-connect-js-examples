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
    transform: function(){
      angle += 0.03;
      return Transform.rotateY(angle);
    }
  });

  var square = new Surface({
    size: [200, 200],
    properties: {
      backgroundColor: '#cccccc'
    },
    classes: ['backfaceVisibility']
  });

  mainContext.add(centerModifier).add(square);
});
