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

  var initialTime = Date.now();

  var centerModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform: function(){
      return Transform.rotateY(0.002 * (Date.now() - initialTime));
    }
  });

  var square = new Surface({
    size: [200, 200],
    properties: {
      backgroundColor: '#cccccc'
    },
    classes: ['backfaceVisibility']
  });

  mainContext.add(centerModifier).add( square );
});
