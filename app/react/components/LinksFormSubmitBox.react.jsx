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

        _style: {
            bar: {
                backgroundColor: '#3498DB',
                marginTop: 17,
                boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, .5)'
            },
            slug_text: {
                float: 'left',
                color: '#ECF0F1',
                boxSizing: 'border-box',
                margin: 9,
                marginLeft: 20,
                fontSize: 20,
                input: {
                    fontSize: 20,
                    margin: 0,
                    border: 0,
                    backgroundColor: '#ECF0F1',
                    color: '#717477',
                    boxSizing: 'border-box',
                    outline: 'none'
                }
            },
            submit_button: {
                float: 'right',
                backgroundColor: '#2980B9',
                color: '#ECF0F1',
                fontWeight: 'normal',
                marginRight: 20
            }
        },
        _onSlugChange: function( event ) {
            LinksFormActionCreator.slugChanged( event.target.value );
        },
        _getStateFromStores: function() {
            return {
                slug: LinksFormListStore.getSlug()
            };
        },
        _onChange: function() {
            this.setState( this._getStateFromStores() );
        },

        getDefaultProps: function() {
            return {}
        },
        getInitialState: function() {
            return this._getStateFromStores()
        },
        componentDidMount: function() {
            LinksFormListStore.addChangeListener( this._onChange );
        },
        componentDidUnmount: function() {
            LinksFormListStore.removeChangeListener( this._onChange );
        },
        render: function() {
            return (
                <Bar
                    style={ this._style.bar }>
                    <div
                        style={ this._style.slug_text }>
                        http://rndmlnk.com/s/
                        <input
                            type='text'
                            style={ this._style.slug_text.input }
                            onChange={ this._onSlugChange }
                            value={ this.state.slug }
                            />
                    </div>
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