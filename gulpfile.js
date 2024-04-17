const gulp = require('gulp')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

const compJS = () => {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
}

const compStyle = () =>{
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

const compImg = () => {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.default = function(){
    gulp.watch('./source/js/*.js', {ignoreInitial: false}, gulp.series(compJS))
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compStyle))
    gulp.watch('./source/imagens/*', {ignoreInitial: false}, gulp.series(compImg))
}

// exports.javascript = compJS
// exports.estilos = compStyle
// exports.imagens = compImg
