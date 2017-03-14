var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');

gulp.task('revision', ['styles','scripts', 'images', 'svg'], function() {
    return gulp.src(['staging/assets/css/*.css', 'staging/assets/js/*.js', 'staging/assets/img/*.*', 'staging/assets/svg/*.svg'], {base: path.join(process.cwd(), 'staging/assets')})
        .pipe(rev())
        .pipe(gulp.dest('static/assets'))
        .pipe(rev.manifest())
        .pipe(del({dest: 'static/assets'}))
        .pipe(gulp.dest('static/assets'));
});
