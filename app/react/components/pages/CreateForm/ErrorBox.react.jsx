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
                style: {
                    backgroundColor: '#3498DB'
                },
                table_cell_style: {}
            };
        },
        _style: {
            bar: {
                backgroundColor: '#E74C3C'
            }
        },
        render: function() {
            return (
                <Bar
                    style={ this._style.bar }>
                    An Error Has Occurred
                </Bar>
            );
        }
    } );
})();
