/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var centerModifier = new StateModifier({
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

  centerModifier.setTransform( Transform.rotateY(1000), {duration: 500, curve: "easeOutBounce"} );
  centerModifier.setTransform( Transform.rotateY(0), {duration: 3000, curve: "easeOutBounce"} );

  mainContext.add(centerModifier).add( square );
});
