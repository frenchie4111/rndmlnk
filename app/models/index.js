/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var Sequelize = require( 'sequelize' ),
        fs = require( 'fs' ),
        _ = require( 'underscore' ),
        path = require( 'path' );

    var config = require( '../../config' );

    var previously_initialized = false,
        models = {};

    var defaultInstanceMethods = {};
    var defaultClassMethods = {};

    module.exports.init = function init() {
        if( previously_initialized ) return;
        previously_initialized = true;

        var database_config = config.database[ config.env ];

        console.log( database_config );

        var sequelize = new Sequelize(
                database_config.database_name,
                database_config.database_username,
                database_config.database_password,
                {
                    dialect: "postgres",
                    protocol: "postgres",
                    port: database_config.database_port,
                    host: database_config.database_url,
                    logging: database_config.sequelize_logging,
                    native: database_config.database_native,
                    define: {
                        instanceMethods: defaultInstanceMethods,
                        classMethods: defaultClassMethods
                    }
                } )
            ;

        // Load all models in directory
        fs
            .readdirSync( __dirname )
            .filter( function filenameFilter( filename ) {
                return ( ( filename.charAt( 0 ) !== '.' ) && ( filename !== 'index.js' ) );
            } )
            .forEach( function filenameHandler( filename ) {
                var model = sequelize.import( path.join( __dirname, filename ) );
                models[ model.name ] = model;
            } );

        // Allow each model to create it's associations
        Object.keys( models ).forEach( function modelHandler( modelname ) {
            if( models[ modelname ].options.hasOwnProperty( 'associate' ) ) {
                models[ modelname ].options.associate( models );
            }
        } );

        // Create exportable database
        var db = _.extend( {
            sequelize: sequelize,
            Sequelize: Sequelize
        }, models );

        // Add database to exports
        module.exports.db = db;

        // Return database
        return db;
    };

    module.exports.deinit = function() {
        models = {};
        delete module.exports.db;
        previously_initialized = false;
    };

})();