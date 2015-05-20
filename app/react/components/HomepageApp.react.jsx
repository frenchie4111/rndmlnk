/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var Title = require( './Title.react.jsx' );

    var HomepageApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = HomepageApp = React.createClass( {
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
                    <Title title={ 'test' } />
                    { this.state.links }
                </div>
            );
        }
    } );
})();