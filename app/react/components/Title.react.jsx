/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var Title;

    module.exports = Title = React.createClass( {
        getDefaultProps: function() {
            return {
                title: '',
                subtitle: ''
            };
        },
        render: function() {
            return (
                <div>
                    <h1>{ this.props.title }</h1>
                    <h2>{ this.props.subtitle }</h2>
                </div>
            );
        }
    } );
})();