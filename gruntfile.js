
'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dev: {
				files: { 
					'css/site.css' : 'scss/bootstrap.scss'
				}
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/script-learngrunt.js'],
				dest: 'js/site.js',
			},
		},
		watch: {
			scss: {
				files: "scss/*.scss",
				tasks: ['sass'],
				options: { 
					livereload: true,
				}
			},
			html: {
				files: '*.html',
				options: { 
					livereload: true,
				},
			},
		},
		browserSync: {
			bsFiles: {
				src: [
				'css/site.css',
				'index.html',
				'js/site.js'
				]
			},
			options: {
				server: {
					baseDir: './'
				},
				watchTask: true,
			},
		},
		uglify: {
			deploy: {
				src: 'js/site.js',
				dest: 'js/site.min.js'
			},
		},
		uncss: {
			testing: {
				src: '*.html',
				dest: 'css/site.css'
			},
			deploy: {
				options: {
					report: 'min',
					ignore: ['.js_*', '#js_*']
				},
				src: '*.html',
				dest: 'css/site.min.css'
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			dev: {
				src: 'css/site.css',
				dest: 'css/site.css'
			}
		},
		captain_hook: {
			dev: {
				cssFiles: 'css/site.css',
				jsFiles: [
					'js/**/*.js',
					'//localhost:35729/livereload.js',
					'!js/site.js',
					'!js/site.min.js'
				],
				targetHtml: '*.html'
			},
			testing: {
				cssFiles: 'css/site.css',
				jsFiles: 'js/site.js',
				targetHtml: '*.html'
				
			},
			deploy: {
				cssFiles: 'css/site.min.css',
				jsFiles: 'js/site.min.js',
				targetHtml: '*.html'
			}

		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-captain-hook');


grunt.registerTask('dev', ['sass', 'browserSync', 'watch']);

}