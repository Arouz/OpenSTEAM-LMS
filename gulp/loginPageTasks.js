const gulp = require('gulp');

function loginHtml(){
	return gulp
	.src(['login_page_template/login.html'])
	.pipe(gulp.dest('classroom/'));
}

function loginPhp(){
	return gulp
	.src(['login_page_template/login.php'])
	.pipe(gulp.dest('classroom/'));
}

loginPhp.displayName = 'login php file';
loginHtml.displayName = 'login html file';

loginPageBuild = gulp.series(
    loginHtml,
    loginPhp
);
loginPageBuild.displayName = "Classroom: gulp series";

module.exports = {
    loginPageBuild
};