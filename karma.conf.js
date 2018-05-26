// karma.conf.js
module.exports = function(config){
    config.set(
        {
            basePath:'./src',

            files: [
               '../node_modules/angular/angular.js', 
               '../node_modules/angular-mocks/angular-mocks.js',
               '**/*.module.js',
            //    '*!(.module|.spec).js',
               '**/*.spec.js'
            ],
            frameworks: ['jasmine'],

            browsers: ['Chrome'],

            plugins: [
              'karma-chrome-launcher',
              'karma-jasmine'
            ]
        
        }
    )
}