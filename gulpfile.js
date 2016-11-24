const gulp = require('gulp'),
      less = require('gulp-less'),
      path = require('path'),
      watch = require('gulp-watch'),
      livereload = require('gulp-livereload'),
      BUILD_OUTPUT = './.build-output',
      HTML_GLOB = './source/html/**/*.html',
      CSS_GLOB = './source/less/**/*.less',
      IMAGE_GLOB = './source/images/**/*.*',
      SCRIPT_GLOB = './source/scripts/**/*.js';

gulp.task('html', function(){
    return gulp.src(HTML_GLOB)
        .pipe(gulp.dest(BUILD_OUTPUT))
        .pipe(livereload());
});

gulp.task('less', function(){
   return gulp.src(CSS_GLOB)
       .pipe(less({
           paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
       .pipe(gulp.dest( BUILD_OUTPUT + '/css'))
       .pipe(livereload());
});

gulp.task('scripts', function(){
    return gulp.src(SCRIPT_GLOB)
        .pipe(gulp.dest(BUILD_OUTPUT + '/scripts'))
        .pipe(livereload());
});

gulp.task('images', function(){
    return gulp.src(IMAGE_GLOB)
        .pipe(gulp.dest(BUILD_OUTPUT + '/images'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(CSS_GLOB, ['less']);
    gulp.watch(HTML_GLOB, ['html']);
    gulp.watch(SCRIPT_GLOB, ['scripts']);
});

gulp.task('default',['html', 'less', 'images', 'scripts', 'watch']);