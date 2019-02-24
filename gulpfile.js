var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-dist', () => {
  return gulp.src(['dist/*'], { read: false })
  .pipe(clean());
});

gulp.task('clean-build', () => {
  return gulp.src(['app/build/**/*', 'app/build'], { read: false })
  .pipe(clean());
});

gulp.task('frontend', () => {
  return gulp.src(['app/build/**/*'])
  .pipe(gulp.dest('dist'));
});

gulp.task('electron', () => {
  return gulp.src(['electron/main.js', 'electron/preload.js', 'electron/package.json'])
  .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('clean-dist', 'frontend', 'clean-build', 'electron'));