const gulp = require("gulp");
const gutil = require("gulp-util");
const notify = require("gulp-notify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const watchify = require("watchify");
const babelify = require("babelify");
const concat = require("gulp-concat");
const uglifycss = require("gulp-uglifycss");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const ENTRY_FILE = "./src/js/index.js";
const OUTPUT_DIR = "./build/js";
const OUTPUT_FILE = "bundle.js";
const DELAY = 50;

gulp.task("browserify", function () {
    const b = browserify({ entries: [ ENTRY_FILE ] }).transform(babelify);

    function bundle() {
        b.bundle()
            .on("log", gutil.log)
            .on("error", notify.onError())
            .pipe(source(OUTPUT_FILE))
            .pipe(buffer())
            .pipe(gulp.dest(OUTPUT_DIR))
            .pipe(browserSync.reload({ stream: true }));
    }

    watchify(b, { delay: DELAY }).on("update", bundle);
    bundle();
});

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch("./src/scss/*.scss", ["scss"]);
    gulp.watch("./src/*.html", ["html"]);
    gulp.watch("./images/*", ["images"]);
    gulp.watch("./fonts/*", ["fonts"]);
    gulp.watch(["./build/*.html", "./build/css/*.css", "./build/js/*.js", "./build/images/*", "./build/fonts/*"])
        .on("change", browserSync.reload);

});

gulp.task("html", function (done) {
    gulp
        .src("./src/*.html")
        .pipe(gulp.dest("./build"))
        .on("end", done);
});

gulp.task("images", function (done) {
    gulp
        .src("./images/*")
        .pipe(gulp.dest("./build/images"))
        .on("end", done);
});

gulp.task("fonts", function (done) {
    gulp
        .src("./fonts/*")
        .pipe(gulp.dest("./build/fonts"))
        .on("end", done);
});

gulp.task("scss", function () {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("build.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest("./build/css/"));
});

gulp.task("default", ["html", "images", "fonts", "browserify", "serve" ]);