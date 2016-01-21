'use strict';

var loaderUtils = require('loader-utils');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  return [
    'var asset = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
    'require(' + loaderUtils.stringifyRequest(this, __dirname + '/vm.js') + ')(asset);',
    'module.exports = asset;',
  ].join('\n');
};
