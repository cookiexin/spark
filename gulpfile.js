'use strict';

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var gutil = require('gulp-util')
var data = require('gulp-data')
var browserSync = require('browser-sync')
var ejs = require('gulp-ejs')

// 模版目录
var tplDir = './templates'
// 生成目录
var distDir = './html'


// 模版合并
gulp.task('ejs', function() {
    gulp.src(tplDir + '/**/*.html')
        .pipe(ejs().on('error', function(err) {
            gutil.log(err);
        }))
        .pipe(gulp.dest(distDir));
});

gulp.task('ejs-watch', ['ejs']);

gulp.task('resource', function() {
    gulp.src([
            tplDir + '/**/*.css',
            tplDir + '/**/*.png',
            tplDir + '/**/*.jpeg',
            tplDir + '/**/*.jpg'
        ])
        .pipe(gulp.dest(distDir));
});

// 开发服务
gulp.task('dev', ['ejs', 'resource'], function() {

    browserSync.init({
        server: {
            baseDir: distDir
        },
        files: [distDir + '/**.*'],
        reloadDebounce: 0
    });

    gulp.watch([tplDir + '/**/*.ejs', tplDir + '/**/*.html'], ['ejs-watch']);
    gulp.watch([
        tplDir + '/**/*.css',
        tplDir + '/**/*.png',
        tplDir + '/**/*.jpeg',
        tplDir + '/**/*.jpg'], ['resource']);
});