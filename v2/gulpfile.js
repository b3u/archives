const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass');


// Static server & watch scss + html files
gulp.task('watch', function() {

browserSync.init({
server: '.'
});

gulp.watch('./assets/*.css', browserSync.reload);
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('./js/*.js', browserSync.reload);

});


// default will also watch
gulp.task('default', ['watch']);