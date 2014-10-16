/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  var mainContext = Engine.createContext();

  mainContext.setPerspective(1000);

  var square = new Surface({
    size: [200, 200],
    classes: ['blue-background']
  });

  mainContext.add(square);
});
