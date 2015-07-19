/**
 * Created by Jnuaid on 7/1/2015.
 */

//var gulp=require('gulp');   //ist of all we have to import gulp using require('gulp') for all tasks

                //1st Task

//var gulp=require('gulp');
//gulp.task('hello1', function() {         //ist param of "task" (method of gulp) is "task-name" , 2nd param is function(functionality of this task)
//    console.log('Hel');                 // we have logged on console "Hel"
//});
//
//gulp.task('hello2', ['hello1'], function() {        //In This task he have added task1 as dependency (which means tasks that requires other tasks to be run before it) , ['hello1'] task will be run before task 'hello2'
//    console.log('lo');                              // we have logged on console "lo"
//});
//
//gulp.task('hello3', ['hello1', 'hello2'], function() { //  hello2 and hello1 task are as dependency of hello3 , they will run in parallel (but hello2 task will also automates to run task hello1 (as hello1 task's functionality says) so 'hello1' is unecessary there) then hello3 task will be run
//    console.log('World');                               // we have logged on console "World"
//});

                //Output of 1st Task:


//C:\Users\Jnuaid\Desktop\Gulp-Tasks>gulp istTask
//    [16:46:17] Using gulpfile ~\Desktop\Gulp-Tasks\gulpfile.js
//    [16:46:17] Starting 'istTask'...
//    [16:46:17] Finished 'istTask' after 70 ms
//
//C:\Users\Jnuaid\Desktop\Gulp-Tasks>gulp hello3
//    [16:49:12] Using gulpfile ~\Desktop\Gulp-Tasks\gulpfile.js
//    [16:49:12] Starting 'hello1'...
//    Hel
//    [16:49:12] Finished 'hello1' after 638 µs
//    [16:49:12] Starting 'hello2'...
//    lo
//    [16:49:12] Finished 'hello2' after 449 µs
//    [16:49:12] Starting 'hello3'...
//    World
//    [16:49:12] Finished 'hello3' after 287 µs





            //Second Task -- Streaming

// to transpile ts files into js files we have created a task as below:
// we need to import gulp-typescript for it , using command line :
// npm install --save gulp-typescript

//var gulp = require('gulp');
//var ts = require('gulp-typescript');       // then require this in a variable named "ts"
//gulp.task('istTask',function(){      // ist parameter is name of task , sec is what it will perform a function
//    gulp.src('public/www/js/**/*.ts')  // here is a method "src" of gulp , which takes source files
//        .pipe(ts())                   //here we use pipe to forward the work flow with function ts() which performs a function of transpilation of ts files into js files
//      .pipe(gulp.dest('public/www/js/'));   // then again use pipe to forward the work flow of that files , and using a method "dest" of gulp to place that files
//});

                    //Output Of second Task


//C:\Users\Jnuaid\Desktop\Gulp-Tasks>gulp istTask
//    [16:46:17] Using gulpfile ~\Desktop\Gulp-Tasks\gulpfile.js
//    [16:46:17] Starting 'istTask'...
//    [16:46:17] Finished 'istTask' after 70 ms



                //Third Task -- Minifying Files and Return a Stream

//To minify JavaScript files (for production environment):
// use cmd:  npm install --save gulp-uglify

//var gulp=require('gulp');
//var minify  = require ('gulp-uglify');
//gulp.task('minify', function() {
//    var stream = gulp.src('public/www/js/**/*.js')
//        .pipe(minify())
//        .pipe(gulp.dest('build'));
//    return stream;
//});



            //Output Of Third Task

//C:\Users\Jnuaid\Desktop\Gulp-Tasks>gulp minify
//    [16:51:29] Using gulpfile ~\Desktop\Gulp-Tasks\gulpfile.js
//    [16:51:29] Starting 'minify'...
//    [16:51:30] Finished 'minify' after 332 ms

