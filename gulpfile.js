const wdio = require('gulp-wdio');
const gulp = require('gulp');

gulp.task('test', () => {
    return gulp.src('wdio.conf.js')
        .pipe(wdio({
            wdio: {}
        }));
});
