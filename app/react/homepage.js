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
        HomepageApp = React.createFactory( require( './components/HomepageApp.react.jsx' ) );

    React.render( HomepageApp(), document.getElementById( 'content' ) )
})();