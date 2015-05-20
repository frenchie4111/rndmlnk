/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' ),
    // This is our React component, shared by server and browser thanks to browserify
        RndmlnkApp = React.createFactory( require( './components/RndmlnkApp.react.jsx' ) );

    React.render( RndmlnkApp(), document.getElementById( 'content' ) )
})();