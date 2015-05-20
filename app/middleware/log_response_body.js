/**
 * Copyright of Mark One Lifestyle Inc.
 *
 * Authors:
 *     - Mike Lyons (m@mkone.co)
 */

(function() {
    'use strict';

    module.exports = function _logResponseBody() {
        return function( req, res, next ) {
            var oldWrite = res.write,
                oldEnd = res.end;

            var chunks = [];

            res.write = function( chunk ) {
                chunks.push( chunk );

                oldWrite.apply( res, arguments );
            };

            res.end = function( chunk ) {
                if( chunk ) {
                    chunks.push( chunk );
                }

                var body = Buffer.concat( chunks ).toString( 'utf8' );
                console.log( "Response" );
                //console.log( req.path, body );
                console.log( req.path );
                console.log( 'Session After' );
                console.log( req.session );
                console.log( "============= End Request =============" );

                oldEnd.apply( res, arguments );
            };

            next();
        };
    };
})();