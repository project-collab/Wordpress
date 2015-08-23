module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass task
		 */
		 sass: {
		 	dev: {
		 		options: {
		 			style: 'expanded',
		 			sourcemap: 'none',
		 		}, // options
		 		files: {
		 			'compiled/style.css' : 'sass/style.scss'
		 		} // files
		 	}, // dev
		 	dist: {
		 		options: {
		 			style: 'compressed',
		 			sourcemap: 'none',
		 		}, // options
		 		files: {
		 			'compiled/style-min.css' : 'sass/style.scss'
		 		} // files
		 	} // dist
		 }, // sass

 		/**
		 * Watch task
		 */
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: '../../../../', // where we want the browser to look
					livereload: true
				} // options
			} // server
		}, // connect
		 /**
		 * Watch task
		 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			} // css
		} // watch

	}); // init config

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch', 'connect']);


} // modules export 