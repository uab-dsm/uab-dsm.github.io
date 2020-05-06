var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');


// Define tasks after requiring dependencies
function combinecss() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src("src/*.scss")
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(cleanCSS())
            // What is the destination for the compiled file?
            .pipe(gulp.dest("dist"))
    );
}
 
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.combinecss = combinecss;

    
 
//  gulp.task('css', function() {
//  return gulp.src('src/template-01/partials/_footer.scss')
//  .pipe(cssbeautify())
//  .pipe(gulp.dest('.'));
// });



function watch(){
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch('src/**/*.scss', combinecss)
}
    
// Don't forget to expose the task!
exports.watch = watch;

