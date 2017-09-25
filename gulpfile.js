const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const tsconfig = require('./tsconfig.json');


gulp.task('ts', () => {
    console.log(tsconfig);
    console.log(tsconfig.compilerOptions);
    return gulp.src(['app/**/*.ts', 'app/**/*.tsx'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsconfig.compilerOptions))
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['ts'], () => {});
