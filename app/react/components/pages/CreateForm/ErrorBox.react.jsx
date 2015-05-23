/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' ),
        _ = require( 'underscore' );

    var Bar = require( '../../shared/Box.react.jsx' );

    var ErrorBox;

    module.exports = ErrorBox = React.createClass( {
        getDefaultProps: function() {
            return {
                error: 'Unknown Error Occurred'
            };
        },
        _style: {
            bar: {
                backgroundColor: '#E74C3C',
                color: '#ECF0F1',
                fontSize: 24,
                paddingLeft: 17,
                marginTop: 17,
                boxSizing: 'border-box'
            }
        },
        render: function() {
            return (
                <Bar
                    style={ this._style.bar }>
                    Error: { this.props.error }
                </Bar>
            );
        }
    } );
})();
