var autoprefixer = require('autoprefixer-stylus'),
    nib = require('nib'),
    path = require('path');

module.exports = function(opts) {
  var implicit = (opts && opts.implicit == false) ? false : true;

  return function(style){
    // include axis
    style.include(nib.path);
    style.include(__dirname);

    // implicit import handling
    if (implicit) {
      style.import('nib');
      style.import('axis');
    }

    // autoprefixer integration
    autoprefixer()(style);
  }

}
