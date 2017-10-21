module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/sass/main.scss'
        }
      }
    }
  });
  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
 }
 watch: {
    scripts: {
        files: ['assets/sass/main.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
}
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin']);
};