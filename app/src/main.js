/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var SpringTransition = require('famous/transitions/SpringTransition');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var stateModifier = new StateModifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  });

  var square = new Surface({
    size: [200, 200],
    properties: {
      backgroundColor: '#cccccc'
    },
    classes: ['backfaceVisibility']
  });

  stateModifier.setTransform(Transform.rotateY(1000), {
    method: SpringTransition,
    period: 500,
    dampingRatio: 0.2
  });

  stateModifier.setTransform(Transform.rotateY(0), {
    method: SpringTransition,
    period: 500,
    dampingRatio: 0.2
  });


  mainContext.add(stateModifier).add(square);
});
