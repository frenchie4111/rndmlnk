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
        $( '#link_link' ).prop( 'href', '/s/' + redirect_link.redirect_link );
        $( '#link_name' ).text( redirect_link.redirect_link );

        redirect_link.links
            .map( function( link ) {
                var tr = $( '<tr></tr>' );

                var td_link = $( '<td></td>' );
                td_link.text( link.link );
                tr.append( td_link );

                var td_count = $( '<td></td>' );
                td_count.text( link.count );
                tr.append( td_count );

                return tr;
            } )
            .forEach( function( link_html ) {
                $( '#table' ).append( link_html );
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