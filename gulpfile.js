var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sass        = require('gulp-sass')(require('sass'));
const watchSass = require("gulp-watch-sass")

gulp.task('serve', function () {
    browserSync.init({
        server: {
          baseDir: "./"
        },
        // online: true,
        // tunnel: true,
        // tunnel: "nefely",
        // logLevel: "debug"
    });
    gulp.watch("./**/*.html").on("change", reload);
    gulp.watch("./**/*.css").on("change", reload);
    gulp.watch("./**/*.sass").on("change", reload);
    gulp.watch("./**/*.js").on("change", reload);

    gulp.src([
      "sass/style.sass",
    ])
    .pipe(sass())
    .pipe(gulp.dest("css"));

	gulp.watch("./**/*.sass").on("change" , function(){
		gulp.src([
		  "sass/style.sass",
		])
		.pipe(sass())
		.pipe(gulp.dest("css"));
	})
});