const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/imagens/*')           
        .pipe(imagemin())                          
        .pipe(gulp.dest('./build/imagens'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())                  
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed' 
        }))
        .pipe(sourcemaps.write('./maps'))       
        .pipe(gulp.dest('./build/styles'));
}


// exports.default = gulp.parallel(funcaoPadrao, dizOi);   //executando o gulp em paralelo 
// exports.default = gulp.series(funcaoPadrao, dizOi);  //executando o gulp em ordem

exports.default = function() {
    //arquivo que irá assistir/verificar
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false } /*ao iniciar ja faz uma compilação*/ , gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/imagens/*',{ ignoreInitial: false }, gulp.series(comprimeImagens));
}

exports.imagens = comprimeImagens;