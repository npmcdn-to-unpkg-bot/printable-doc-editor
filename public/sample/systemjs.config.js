(function (global) {

    var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var map = {
        'app': 'sample/app',
        '@angular': 'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js',
        'svg.js': 'https://npmcdn.com/svg.js@2.3.0/dist/svg.min.js',
        'svg.draggable.js': 'https://npmcdn.com/svg.draggable.js@2.2.0/dist/svg.draggable.min.js',
        'svg.select.js': 'https://npmcdn.com/svg.select.js@2.0.3/dist/svg.select.min.js',
        'svg.resize.js': 'https://npmcdn.com/svg.resize.js@1.2.0/dist/svg.resize.min.js'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'print-editor': {defaultExtension: 'js'},
        'app': {main: 'boot.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);
    System.import('app').catch(function (err) {
        console.error(err);
    });

})(this);
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */