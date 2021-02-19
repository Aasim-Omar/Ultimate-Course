var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var minify = require("gulp-minify");
var connect = require("gulp-connect");

// HTML Task
gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
});

// Css Task
gulp.task("css", function () {
  return gulp
    .src("./stage/css/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(concat("libs.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css/"))
});

// Sass task
gulp.task("sass", function() {
  return gulp
    .src("./stage/css/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
});

// Js Task
gulp.task("js", function () {
  return gulp
    .src("./stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/js/"))
    .pipe(connect.reload());
});

// Warch Task
gulp.task("watch", function() {
  connect.server({root: "dist", livereload: true});
  gulp.watch("./stage/html/**/*.pug", ["html"]);
  gulp.watch("./stage/css/**/*.scss", ["sass"]);
  gulp.watch("./stage/js/*.js", ["js"]);
});

// Default Task
gulp.task("default", ["watch"]);
