var gulp = require('gulp');

gulp.task('frontend', () => {
  return gulp.src(['app/build/**/*'])
  .pipe(gulp.dest('dist/build/html'));
});

gulp.task('electron', () => {
  return gulp.src(['electron/**/*', '!electron/node_modules', '!electron/package-lock.json', 'electron/package.json'])
  .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('frontend', 'electron'));