var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch:css', 'browser-sync']);

gulp.task('watch:css', function() {
	return gulp.watch('assets/css/styles.css', ['sync:css']);
});

gulp.task('sync:css', function() {
	gulp.src('assets/css/styles.css').pipe(browserSync.stream());
})

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
