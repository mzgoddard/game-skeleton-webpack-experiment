'use strict';

var _ = require('lodash');
var jsdom = require('jsdom');

function PreloadPlugin() {}

module.exports = PreloadPlugin;

PreloadPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
  });
  compiler.plugin('emit', function(compilation, callback) {
    _.each(compilation.assets, function(asset, name) {
      if (name === 'index.html') {
        var dom = jsdom.jsdom(asset.source());

        // Set script to async so assets listed after may load at the same time.
        dom.querySelector('script:last-child').setAttribute('async', true);

        // Find all preloaded modules in the main entry chunk and add their assets to the body.
        compilation.chunks
        .filter(function(chunk) {
          return chunk.name === 'main';
        })
        .forEach(function(chunk) {
          chunk.modules
          .filter(function(module) {
            return _.find(module.loaders, function(loader) { return /preload-loader/.test(loader); });
          })
          .forEach(function(module) {
            function walk(module, fn) {
              module.dependencies.forEach(function(dep) {
                if (dep.module) {
                  fn(dep.module);
                  walk(dep.module, fn);
                }
              });
            }
            walk(module, function(module) {
              _.each(module.assets, function(asset, assetName) {
                var imgTag = dom.createElement('img');
                imgTag.src = (compiler.options.output.publicPath || '') + assetName;
                imgTag.style.display = 'none';
                dom.querySelector('body').appendChild(imgTag);
              });
            });
          });
        });

        // Serialize and replace the html asset.
        var source = jsdom.serializeDocument(dom);
        compilation.assets[name] = {
          source: function() {
            return source;
          },
          size: function() {
            return source.length;
          },
        };
      }
    });
    callback();
  });
};
