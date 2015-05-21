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
        LinksFormTableView = require( './LinksFormTableView.react.jsx' ),
        Button = require( './Button.react.jsx' );

    var LinksFormActionCreator = require( '../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../stores/LinksFormListStore' );

    var LinksFormSubmitBox;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksFormSubmitBox = React.createClass( {
        getDefaultProps: function() {
            return {
            }
        },
        _style: {
            bar: {
                backgroundColor: '#3498DB',
                marginTop: 17,
                boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, .5)'
            },
            submit_button: {
                float: 'right',
                backgroundColor: '#2980B9',
                color: '#ECF0F1',
                fontWeight: 'normal',
                marginRight: 20
            }
        },
        render: function() {
            return (
                <Bar
                    style={ this._style.bar }>
                    <Button
                        style={ this._style.submit_button }
                        onClick={ function() { LinksFormActionCreator.submitForm() } }>
                        Create Link
                    </Button>
                </Bar>
            );
        }
    } );
})();