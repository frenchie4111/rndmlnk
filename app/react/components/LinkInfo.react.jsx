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

    var Bar = require( './Bar.react.jsx' ),
        TableView = require( './TableView.react.jsx' ),
        LinksFormTextInput = require( './LinksFormTextInput.react.jsx' );

    var LinksFormActionCreator = require( '../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../stores/LinksFormListStore' );

    var LinkInfo;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinkInfo = React.createClass( {
        // Private
        _style: {
            div: {
                marginTop: 17,
                boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, .5)'
            },
            header: {
                backgroundColor: '#3498DB',
                color: '#ECF0F1',
                fontSize: 24,
                left: {
                    paddingLeft: 17,
                    float: 'left',
                    maxWidth: 700
                },
                right: {
                    paddingRight: 17,
                    float: 'right'
                }
            },
            row: {
                backgroundColor: '#ECF0F1',
                left: {
                    paddingLeft: 17,
                    float: 'left',
                    maxWidth: 700
                },
                right: {
                    paddingRight: 17,
                    float: 'right'
                }
            }
        },
        _renderHeader: function() {
            return (
                <Bar
                    style={ this._style.header }>
                    <div
                        style={ this._style.header.left }>
                        Links
                    </div>
                    <div
                        style={ this._style.header.right }>
                        Count
                    </div>
                </Bar>
            );
        },
        _renderRow: function( item, i ) {
            return (
                <Bar
                    style={ this._style.row }>
                    <div
                        style={ this._style.row.left }>
                        { item.link }
                    </div>
                    <div
                        style={ this._style.row.right }>
                        { item.count }
                    </div>
                </Bar>
            )
        },

        // React Methods
        getDefaultProps: function() {
            return {
                links: [],
                total: 0
            };
        },
        render: function() {
            return (
                <div>
                    <div
                        style={ this._style.div }>
                        <TableView
                            renderHeader={ this._renderHeader }
                            renderRow={ this._renderRow }
                            data={ this.props.links } />
                    </div>
                    <Bar
                        style={ _.extend( this._style.header, this._style.div ) }>
                        <div
                            style={ this._style.header.right }>
                            Total: { this.props.total }
                        </div>
                    </Bar>
                </div>
            );
        }
    } );
})();