var gulp = require('gulp');


var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var cssnano      = require('gulp-cssnano');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var runSequence = require('run-sequence')


gulp.task('sass', function (){
  return gulp.src('app/styles/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}))
})


gulp.task('browserSync', function (){
	browserSync({
		server:{
			baseDir: 'app'
		}
	})
})


gulp.task('watch', ['browserSync', 'sass'], function (){
	gulp.watch('app/styles/**/*.sass', ['sass']);
	gulp.watch('app/*.html', reload);
})

gulp.task('default', function(callback){
	runSequence(
		['sass', 'browserSync', 'watch']
	)
})