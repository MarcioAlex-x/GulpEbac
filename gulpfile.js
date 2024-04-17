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
    return gulp.src('./source/imagens/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.javascript = compJS
exports.estilos = compStyle
exports.imagens = compImg
