var path = require('path');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			lizard: {
				src: 'lizard/src/*.svg',
				dest: 'lizard/dest/fonts',
				destCss: 'lizard/dest/css',
				options: {
					font: 'Lizard',
					types: 'eot,woff,svg,ttf',
					syntax: 'bootstrap',
					hashes: false
				}
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', 'lizard/*.js'],
			options: {
				node: true,
				white: false,
				smarttabs: true,
				eqeqeq: true,
				immed: true,
				latedef: false,
				newcap: true,
				undef: true,
				laxbreak: true
			}
		},
		copy: {
			webfont: {
				files: [
					{
						expand: true,
						flatten: true,
						filter: 'isFile',
						src: 'lizard/dest/fonts/*.*',
						dest: '../../fonts/'
					}
				]
			}
		},
		clean: ['lizard/tmp']
	});

	// grunt.loadTasks('tasks');
	
	grunt.registerTask('default', ['jshint', 'clean', 'webfont', 'copy', 'clean']);
	grunt.registerTask('build', ['default']);

};