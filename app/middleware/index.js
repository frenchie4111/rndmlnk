/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var _ = require( 'underscore' ),
        express = require( 'express' );

    // Ordering of this array DEFINITELY matters
    var middleware = [
        require( './log_response_body' )(),
        require( 'body-parser' ).json(),
        require( 'body-parser' ).urlencoded( { extended: true } ),
        require( './log_request_body' )()
    ];

    /**
     * Initializes middleware. The array defined above (middleware) is the list of middlewares that it will install
     * into the app
     * @param app The app to install the middleware into
     * @param options This options array is passed to the object type of middleware
     */
    exports.initialize = function( app, options ) {
        _.each( middleware, function( middleware ) {
            /**
             * Function type middleware, the initializer tells the app to use this function in it's processing
             * chain
             */
            if( _.isFunction( middleware ) ) {
                return app.use( middleware );
            }

            /**
             * Object type middleware, the initializer calls the init function passing in the app and options
             */
            if( _.isObject( middleware ) && middleware.init ) {
                middleware.init( app, options );
            }
        } );
    };
})();