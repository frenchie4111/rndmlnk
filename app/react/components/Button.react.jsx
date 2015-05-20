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

    var Button;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = Button = React.createClass( {
        getDefaultProps: function() {
            return {
                style: {
                    backgroundColor: '#2980B9'
                }
            }
        },
        _style: {
            div: {
                width: 175,
                height: 38,
                borderRadius: 2,
                boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, .12)'
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
                verticalAlign: 'middle',
                textAlign: 'center'
            }
        },
        render: function() {
            return (
                <div
                    style={ _.extend( this.props.style, this._style.div ) }>
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