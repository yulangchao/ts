module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./public",
            src: ["**"],
            dest: "./dist/public"
          },
          {
            expand: true,
            cwd: "./src/views",
            src: ["**"],
            dest: "./dist/views"
          }
        ]
      }
    },
  connect: {
    server: {
      options: {
        port: 8080,
        base: 'www-root'
      }
    }
  },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: false
        }
      }
    },
    watch: {
      ts: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["ts","connect"]
      },
      views: {
        files: ["src/views/**/*"],
        tasks: ["copy","connect"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
grunt.loadNpmTasks('grunt-reload');
grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask("default", [
    "copy",
    "ts"
  ]);

};
