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

    var Bar;

    module.exports = Bar = React.createClass( {
        getDefaultProps: function() {
            return {
                style: {
                    backgroundColor: '#3498DB'
                }
            };
        },
        _style: {
            div: {
                width: 800,
                height: 65
            },
            table: {
                display: 'table',
                width: '100%',
                height: '100%'
            },
            table_row: {
                display: 'table-row'
            },
            table_cell: {
                display: 'table-cell',
                verticalAlign: 'middle'
            }
        },
        render: function() {
            var bar_style = _.extend( this.props.style, this._style.div );

            return (
                <div
                    style={ bar_style }>
                    <div
                        style={ this._style.table }>
                        <div
                            style={ this._style.table_row }>
                            <div
                                style={ this._style.table_cell }>
                                { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    } );
})();
