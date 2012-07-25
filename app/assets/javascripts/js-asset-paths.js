//= require 'jquery'
//= require 'js-yaml'
window.Assets = (function() {
  var manifest = {};

  $.get('/assets/manifest.yml', function(manifest_yml) {
    manifest = jsyaml.load(manifest_yml);
  });

  var assets = {};

  assets.path = function(name) {
    name = manifest[name] || name;
    return '/assets/' + name;
  };

  return assets;
})();
