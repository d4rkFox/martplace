let gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  autoprefixer = require ('gulp-autoprefixer'),
  concat = require ('gulp-concat'),
  uglify = require ('gulp-uglify'),
  cssmin = require ('gulp-cssmin'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  ttf2woff = require('gulp-ttf2woff');

gulp.task('sass', function() {
return  gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
          overrideBrowserslist:['last 8 versions']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('style', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/magnific-popup/dist/magnific-popup.css'
  ])
      .pipe(concat('libs.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('app/css'))
 });

gulp.task('script', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'node_modules/mixitup/dist/mixitup.js',

  ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'))
 });

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app/"
      }
  });
});

gulp.task('ttf2woff', function(){
  return gulp.src(['app/fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('app/fonts/'));
});

gulp.task('ttf2woff2', function(){
  return gulp.src(['app/fonts/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('app/fonts/'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*js', gulp.parallel('js'))
  gulp.watch('app/fonts/**/*.ttf', gulp.parallel('ttf2woff2','ttf2woff'));

})

gulp.task('default', gulp.parallel ('style', 'script', 'sass', 'watch', 'browser-sync','ttf2woff2','ttf2woff'))

