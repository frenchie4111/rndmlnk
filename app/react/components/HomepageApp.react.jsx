/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var Title = require( './Title.react.jsx' ),
        LinksFormTableView = require( './LinksFormTableView.react.jsx' );

    var LinksFormListStore = require( '../stores/LinksFormListStore' );

    var HomepageApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = HomepageApp = React.createClass( {
        getDefaultProps: function() {
            return {
            }
        },
        getInitialState: function() {
            return this._getStateFromDataSource();
        },
        _style: {
            header: {
                fontSize: 24,
                paddingLeft: 17,
                paddingRight: 17,
                left: {
                    float: 'left'
                },
                right: {
                    float: 'right',
                    textDecoration: 'underline'
                },
                clear: {
                    clear: 'both',
                    display: 'none'
                }
            }
        },
        _renderHeader: function() {
            return (
                <div
                    style={ this._style.header }>
                    <div
                        style={ this._style.header.left }>
                        Links
                    </div>
                    <div
                        style={ this._style.header.right }>
                        Add
                    </div>
                    <div
                        style={ this._style.header.clear }></div>
                </div>
            );
        },
        _renderRow: function( item ) {
            return (
                <div>
                    { item }
                </div>
            )
        },
        _getStateFromDataSource: function() {
            return {
                links: LinksFormListStore.getAll()
            };
        },
        _onChange: function() {
            console.log( 'changed' );
            this.setState( this._getStateFromDataSource )
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
                    onClick={ this.onClick }
                    className='container'>
                    <Title
                        title={ 'Rndmlnk' }
                        subtitle={ 'Creates a link that will randomly redirect to a list of other links' } />

                    <LinksFormTableView
                        links={ this.state.links } />
                </div>
            );
        }
    } );
})();