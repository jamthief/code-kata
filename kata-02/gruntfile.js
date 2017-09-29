module.exports = function(grunt) {
	grunt.registerTask('test', [ 'mochaTest' ]);

	grunt.initConfig({
		mochaTest: {
			kata02: {
				options: {
					reporter: 'spec',
				},
				src: [
					'test/kata02_spec.js'
				],
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');
}