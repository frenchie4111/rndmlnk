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

    var Button;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = Button = React.createClass( {
        getDefaultProps: function() {
            return {
                style: {
                    backgroundColor: '#2980B9'
                },
                className: 'hover_start2'
            }
        },
        getInitialState: function() {
            return {
                hover: false
            };
        },
        _style: {
            div: {
                boxSizing: 'border-box',
                paddingLeft: 20,
                paddingRight: 20,
                height: 38,
                borderRadius: 2
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
                    className={ this.props.className }
                    style={ _.extend( this.props.style,
                                      this._style.div ) }
                    onClick={ this.props.onClick }>
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