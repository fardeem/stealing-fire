const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('styles/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify css
    .pipe(gulp.dest('styles/'))
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.scss', gulp.series('sass')); 
  // Other watchers
})