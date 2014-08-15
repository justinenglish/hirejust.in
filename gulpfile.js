var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('start', shell.task([
  'foreman start'
]))
