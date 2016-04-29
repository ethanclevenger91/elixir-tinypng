var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var tinypng = require('gulp-tinypng-compress');

const config = Elixir.config;


const gulpTask = function(src, output, options) {
    const paths = prepGulpPaths(src, output);

    new Elixir.Task('tinypng', function() {
      return gulp.src(paths.src+'/**/*.{png,jpg,jpeg}')
    		.pipe(tinypng(options))
    		.pipe(gulp.dest(paths.output));
    })
    .watch(paths.src+'/**/*.{png,jpg,jpeg}')
};

Elixir.extend('tinypng', function() {
    gulpTask.apply(this, arguments);
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
const prepGulpPaths = function(src, output) {
    if(!output) {
      output = 'img';
    }
    return {
      src: config.get('img.folder') || config.get('assetsPath')+'/'+src,
      output: config.get('img.outputFolder') || config.get('publicPath')+'/'+output
    };
};
