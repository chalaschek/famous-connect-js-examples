/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var Modifier = require('famous/core/Modifier');
  var View = require('famous/core/View');

  function Cube(options){
    View.call(this, options);

    this.size = options.size || 200;

    this.initSurfaces();
  }

  Cube.prototype = Object.create(View.prototype);
  Cube.prototype.constructor = Cube;

  Cube.prototype.initSurfaces = function(){

    var surfaceRotations = [
      [0, 0, 0],
      [0, degreesToRadian(90), 0],
      [0, degreesToRadian(-90), 0],
      [0, degreesToRadian(180), 0],
      [degreesToRadian(90), 0, 0],
      [degreesToRadian(-90), 0, 0]
    ];

    var surfaceTranslations = [
      [0, 0, this.size/2],
      [this.size/2, 0, 0],
      [-this.size/2, 0, 0],
      [0, 0, -this.size/2],
      [0, this.size/2, 0],
      [0, -this.size/2, 0]
    ];

    for(var i = 0; i < 6; i++){
      var opacityModifier = new Modifier({
        opacity: 0.8
      });

      var translationModifier = new Modifier({
        transform: Transform.translate.apply(this, surfaceTranslations[i] )
      });

      var rotationModifier = new Modifier({
        transform: Transform.rotate.apply(this, surfaceRotations[i])
      });

      var surface = new Surface({
        size: [this.size, this.size],
        properties: {
          border: '1px solid #333'
        },
        classes: ['backfaceVisibility', 'blue-background']
      });

      this.add(opacityModifier).add(translationModifier).add(rotationModifier).add(surface);
    }
  }

  function degreesToRadian(deg){
    return deg * Math.PI/180;
  }

  module.exports = Cube;
});
