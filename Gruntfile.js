/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html', './dlg-font/*.html', './editer/*.html', './list/*.html', './menubar/*.html']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/*.css', './dlg-font/*.css', './editer/*.css', './list/*.css', './menubar/*.css', './commoncss/*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['./js/*.js', './dlg-font/*.js', './editer/*.js', './list/*.js', './menubar/*.css']
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'dist/index.html',
        dest: 'dist/index.html'
      }
    },
    imagemin: {
      files: {
        expand: true,
        src: ['./images/*.png'],
        dest: 'dist/'
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      }
    },
    concat: {
      js: {
        src: ['./dlg-font/*.js', './editer/*.js', './list/*.js', './menubar/*.js', './commonjs/*.js'],
        dest: 'dist/bundle.js'
      },
      css: {
        src: ['./dlg-font/*.css', './editer/*.css', './list/*.css', './menubar/*.css', './commoncss/*.css'],
        dest: 'dist/bundle.css'
      }
    },
    uglify: {
      'dist/bundle.min.js': 'dist/bundle.js'
    },
    cssmin: {
      'dist/bundle.min.css': 'dist/bundle.css'
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    },
    clean: {
      end: ['dist/bundle.css', 'dist/bundle.js', '.tmp']
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('build', ['copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin', 'imagemin', 'clean:end']);
};