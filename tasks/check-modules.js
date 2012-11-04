/*
 * grunt-check-modules
 * https://github.com/jzaefferer/grunt-check-modules
 *
 * Copyright (c) 2012 Jörn Zaefferer
 * Licensed under the MIT license.
 */

 module.exports = function(grunt) {
 "use strict";

 grunt.registerTask( "check-modules", "Run this before anything else that loads local modules to verify they're installed", function() {
	var done = this.async();
	grunt.utils.spawn({
		cmd: "npm",
		args: [ "ls" ]
	}, function( err ) {
		if ( err ) {
			grunt.verbose.error();
			grunt.log.error( err );
			done( false );
			return;
		}
		grunt.verbose.ok();
		done();
	});
 });

 };
