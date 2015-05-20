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
        TableView = require( './TableView.react.jsx' );

    var HomepageApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = HomepageApp = React.createClass( {
        getDefaultProps: function() {
            return {
                initialLinks: [
                    'a',
                    'b',
                    'c'
                ]
            }
        },
        getInitialState: function() {
            return {
                links: this.props.initialLinks
            }
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
                </div>
            );
        },
        render: function() {
            return (
                <div
                    onClick={ this.onClick }
                    className='container'>
                    <Title
                        title={ 'Rndmlnk' }
                        subtitle={ 'Creates a link that will randomly redirect to a list of other links' } />

                    <TableView
                        renderHeader={ this._renderHeader } />
                </div>
            );
        }
    } );
})();