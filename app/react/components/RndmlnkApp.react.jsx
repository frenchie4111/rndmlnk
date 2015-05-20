/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var RndmlnkApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = RndmlnkApp = React.createClass( {
        getDefaultProps: function() {
            return {
                initialLinks: [
                    'a',
                    'b',
                    'c'
                ]
            }
        },
        getInitialState: function() {
            return {
                links: this.props.initialLinks
            }
        },
        onClick: function() {
            console.log( 'test' );
        },
        render: function() {
            return (
                <div onClick={ this.onClick }>
                    { this.state.links }
                </div>
            );
        }
    } );
})();