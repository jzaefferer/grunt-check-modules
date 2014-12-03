/*
 * grunt-check-modules
 * https://github.com/jzaefferer/grunt-check-modules
 *
 * Copyright (c) 2012 Jörn Zaefferer
 * Licensed under the MIT license.
 */

var exec = require( "child_process" ).exec;

module.exports = function(grunt) {
"use strict";

grunt.registerTask( "check-modules", "Run this before anything else that loads local modules to verify they're installed", function() {
	var done = this.async();
	exec( "npm ls", function( err ) {
		if ( err ) {
			done( err );
			return;
		}
		grunt.verbose.ok();
		done();
	});
});

};
