var gulp = require('gulp');
var shell = require('gulp-shell')
var del = require('del');
var ghPages = require('gulp-gh-pages');
const gulpReplace = require('gulp-replace')

// 删除之前生成的dist目录
gulp.task('clean', function (cb) {
  return del([
    '.nodeppt/dist/',
    '.vuepress/dist/',
    // '.publish/'
  ], cb);
});

// 搬运图片
gulp.task('copyVuepressStatic', function () {
    // 搬运图片
    return gulp.src([
        `static/**/*.*`
    ])
    .pipe(gulp.dest(`.vuepress/public/static`))
})

gulp.task('copyNodePPTStatic', function () {
    // 搬运图片
    return gulp.src([
        `static/**/*.*`
    ])
        .pipe(gulp.dest(`.nodeppt/static`))
})

// vuepress打包文件路径替换
gulp.task('cdnPre', function() {
    return gulp
        .src([
            '.vuepress/dist/**/*.{html,js}',
            ])
        .pipe(

            gulpReplace(/(?<!blog-web\/)static\/images/g, 'blog-web/static/images')
        )
        .pipe(gulp.dest('.vuepress/dist'));
});



// shell中执行命令生成文件
gulp.task('build', ['clean'], () => {
  return gulp.src('*.js', {
      read: false
    })
    .pipe(shell([
      'nodeppt generate .nodeppt .nodeppt/dist -a'
    ]))
})

// 部署到github pages上
gulp.task('deploy', ['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      // origin: 'gh-pages',
      remoteUrl: 'git@github.com:luo0412/ppt-web.git',
      force: true
    }))
});

// gulp.task('deploy', shell.task('npm run deploy:nodeppt'));

gulp.task('default', ['deploy']);
