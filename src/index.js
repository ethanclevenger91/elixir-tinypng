var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var _ = require('underscore');
var tinypng = require('gulp-tinypng-extended');

const config = Elixir.config;

config.img = _.extend({
    folder: 'img',
    outputFolder: 'img'
}, config.img || {});

const gulpTask = function(options) {

  var paths = new Elixir.GulpPaths()
      .src(config.get('assets.img.folder'))
      .output(config.get('public.img.outputFolder'));

    new Elixir.Task('tinypng', function() {
      return gulp.src(paths.src.path+'.{png,jpg,jpeg}')
    		.pipe(tinypng(options))
    		.pipe(gulp.dest(paths.output.path));
    })
    .watch(paths.src.path+'.{png,jpg,jpeg}')
};

Elixir.extend('tinypng', function() {
    gulpTask.apply(this, arguments);
});
