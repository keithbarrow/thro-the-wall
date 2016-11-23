const gulp = require('gulp'),
      less = require('gulp-less'),
      path = require('path'),
      BUILD_OUTPUT = './.build-output';

gulp.task('html', function(){
    return gulp.src('./source/html/**/*.html')
        .pipe(gulp.dest(BUILD_OUTPUT));
});

gulp.task('less', function(){
   return gulp.src('./source/less/**/*.less')
       .pipe(less({
           paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
       .pipe(gulp.dest( BUILD_OUTPUT + '/css'));
});

gulp.task('scripts', function(){
    return gulp.src('./source/scripts/**/*.js')
        .pipe(gulp.dest(BUILD_OUTPUT + '/scripts'));
});

gulp.task('default',['html', 'less', 'scripts']);