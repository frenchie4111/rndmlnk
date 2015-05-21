/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var Bar = require( './Bar.react.jsx' ),
        TableView = require( './TableView.react.jsx' ),
        LinksFormTextInput = require( './LinksFormTextInput.react.jsx' );

    var LinksFormActionCreator = require( '../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../stores/LinksFormListStore' );

    var LinksFormTableView;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksFormTableView = React.createClass( {
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
                    float: 'left'
                },
                right: {
                    paddingRight: 17,
                    float: 'right',
                    textDecoration: 'underline'
                },
                clear: {
                    clear: 'both',
                    display: 'none'
                }
            },
            row: {
                backgroundColor: '#ECF0F1',
                input: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                    fontSize: 20
                },
                table_cell: {
                    height: '100%'
                }
            }
        },
        _onAddClick: function() {
            LinksFormActionCreator.addLink();
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
                        style={ this._style.header.right }
                        onClick={ this._onAddClick }>
                        Add
                    </div>
                </Bar>
            );
        },
        _renderRow: function( item, i ) {
            return (
                <Bar
                    style={ this._style.row }
                    table_cell_style={ this._style.row.table_cell }>
                    <LinksFormTextInput
                        value={ item }
                        onChange={ function( new_value ) {
                            LinksFormActionCreator.textChanged( i, new_value );
                        } }
                        onDelete={ function() {
                            LinksFormActionCreator.indexDeleted( i );
                        } }/>
                </Bar>
            )
        },
        _getStateFromDataSource: function() {
            return {
                links: LinksFormListStore.getAll()
            };
        },
        _onChange: function() {
            this.setState( this._getStateFromDataSource );
        },

        // React Methods
        getDefaultProps: function() {
            return {}
        },
        getInitialState: function() {
            return this._getStateFromDataSource();
        },
        componentDidMount: function() {
            LinksFormListStore.addChangeListener( this._onChange );
        },
        componentDidUnmount: function() {
            LinksFormListStore.removeChangeListener( this._onChange );
        },
        render: function() {
            return (
                <div
                    style={ this._style.div }>
                    <TableView
                        renderHeader={ this._renderHeader }
                        renderRow={ this._renderRow }
                        data={ this.state.links } />
                </div>
            );
        }
    } );
})();