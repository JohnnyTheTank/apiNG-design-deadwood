module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/aping-design-deadwood.min.js' : ['src/aping-design-deadwood.js']
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            }
        },
        sass: {
            distMin: {
                options: {                       // Target options
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-deadwood.min.css': 'src/aping-design-deadwood.scss'
                }
            },
            dist: {
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-deadwood.css': 'src/aping-design-deadwood.scss'
                }
            }
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/aping-design-deadwood.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                },
            },
            minifySCSS: {
                files: [
                    'src/aping-design-deadwood.scss',
                    'src/_helper.scss',
                    'src/_style.scss',
                ],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);

};

