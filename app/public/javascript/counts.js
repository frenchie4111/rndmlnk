/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var COUNTS_URL = '/links/' + window.SLUG;

    var parseCounts = function( redirect_link ) {
        $( '#link_link' ).prop( 'href', '/' + redirect_link.redirect_link );
        $( '#link_name' ).text( redirect_link.redirect_link );

        redirect_link.links
            .map( function( link ) {
                var div = $( '<div class="link"></div>' );

                div.text( link.link + ' - ' + link.count );

                return div;
            } )
            .forEach( function( link_html ) {
                $( '#create_container' ).append( link_html );
            } );
    };

    var loadCounts = function() {
        console.log( COUNTS_URL );
        $
            .ajax( {
                url: COUNTS_URL,
                method: 'GET',
                dataFormat: 'json',
                contentType: 'application/json'
            } )
            .done( function( res ) {
                console.log( arguments );
                parseCounts( res );
            } );
    };

    $( function() {
        loadCounts();
    } );
})();