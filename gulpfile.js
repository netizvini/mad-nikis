const gulp = require('gulp');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const tsconfig = require('./tsconfig.json');
const dirs = {
    APP: path.join(__dirname, 'app')
};


gulp.task('ts', () => {
    return gulp.src([
        path.join(dirs.APP, '**/*.ts'),
        path.join(dirs.APP, '**/*.tsx')
    ]).pipe(sourcemaps.init())
        .pipe(ts(tsconfig.compilerOptions))
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {

});


gulp.task('default', ['ts'], () => {});
