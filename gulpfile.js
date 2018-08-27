//引入插件
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task("sass",function(){
	gulp.src('./src/scss/*.scss').pipe(sass()).pipe(rename({suffix:".min"}))
	 .pipe(cssnano())
	.pipe(gulp.dest('css'));
})
gulp.task('js',function(){
	gulp.src('./src/js/*.js').pipe(rename({suffix : ".min"}))
	// .pipe(uglify())
	.pipe(gulp.dest('js'));
})
gulp.task('default',function(){
	gulp.watch(["./src/scss/*.scss","./src/js/*.js"],['sass',"js"]);
})
