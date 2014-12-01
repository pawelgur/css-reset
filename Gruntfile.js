module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : {
			build : {
				files : {
					'dist/pg-reset.css' : [
						'src/html5doctor-reset.css',
						'src/normalize-part.css', 
						'src/murtaugh-html5-reset.css', 
						'src/reset.css', 
					]
				}
			}
		},
		cssmin : {
			build : {
				files : {
					'dist/pg-reset.min.css' : [
						'src/html5doctor-reset.css',
						'src/normalize-part.css', 
						'src/murtaugh-html5-reset.css', 
						'src/reset.css', 
					]
				}
			}
		},
		watch : {
			css : {
				files: 'src/*.css',
				tasks: ['concat', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

};