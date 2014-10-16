/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Transform = require('famous/core/Transform');
  var Modifier = require('famous/core/Modifier');
  var Cube = require('./cube');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var angle = 1;
  var rotateModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform: function(){
      angle += 0.02;
      return Transform.rotate(angle, angle, 0);
    }
  });

  var cube = new Cube({
    size: 200
  });

  mainContext.add(rotateModifier).add(cube);
});
