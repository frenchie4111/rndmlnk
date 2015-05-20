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

    var Title;

    module.exports = Title = React.createClass( {
        getDefaultProps: function() {
            return {
                backgroundColor: '#3498DB'
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
        _getBackgroundColorStyle: function() {
            var _this = this;
            return {
                backgroundColor: _this.props.backgroundColor
            };
        },
        render: function() {
            return (
                <div
                    style={ _.extend( this._style.div,
                                      this._getBackgroundColorStyle() ) }>
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
