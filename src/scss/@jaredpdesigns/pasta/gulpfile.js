"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

const stylesTask = function stylesTask(done) {
  gulp
    .src("*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ level: { 0: { restructureRules: false } } }))
    .pipe(rename("pasta.css"))
    .pipe(gulp.dest("."));
  done();
};

gulp.task("styles", stylesTask);
