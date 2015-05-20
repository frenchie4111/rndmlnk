/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' ),
        _ = require( 'underscore' );

    var Bar = require( './Bar.react.jsx' );

    var TableView;

    module.exports = TableView = React.createClass( {
        getDefaultProps: function() {
            return {
                renderHeader: function() {},
                renderRow: function() {},
                data: []
            };
        },
        _style: {
            div: {
                marginTop: 17
            },
            header: {
                color: '#ECF0F1'
            }
        },
        render: function() {
            return (
                <div
                    style={ this._style.div }>
                    <Bar
                        style={ this._style.header }>
                        { this.props.renderHeader() }
                    </Bar>
                </div>
            );
        }
    } );
})();
