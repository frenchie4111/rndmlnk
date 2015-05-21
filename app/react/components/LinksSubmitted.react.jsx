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
                }
            },
            row: {
                backgroundColor: '#ECF0F1',
                left: {
                    paddingLeft: 17,
                    paddingRight: 17
                }
            }
        },
        getDefaultProps: function() {
            return {
                slug: ''
            };
        },
        render: function() {
            return (
                <div>
                    <div
                        style={ this._style.div }>
                        <Bar
                            style={ this._style.header }>
                            <div
                                style={ this._style.header.left }>
                                Generated Link
                            </div>
                        </Bar>
                        <Bar
                            style={ this._style.row }>
                            <div
                                style={ this._style.row.left }>
                                <a href={ 'http://rndmlnk.com/s/' + this.props.slug }>http://rndmlnk.com/s/{ this.props.slug }</a>
                            </div>
                        </Bar>
                    </div>
                    <div
                        style={ this._style.div }>
                        <Bar
                            style={ this._style.header }>
                            <div
                                style={ this._style.header.left }>
                                Information Link
                            </div>
                        </Bar>
                        <Bar
                            style={ this._style.row }>
                            <div
                                style={ this._style.row.left }>
                                <a href={ 'http://rndmlnk.com/counts/' + this.props.slug }>http://rndmlnk.com/counts/{ this.props.slug }</a>
                            </div>
                        </Bar>
                    </div>
                </div>
            );
        }
    } );
})();