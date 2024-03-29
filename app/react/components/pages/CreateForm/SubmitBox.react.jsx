/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var Bar = require( '../../shared/Box.react.jsx' ),
        TableView = require( '../../shared/TableView.react.jsx' ),
        LinksFormTableView = require( './LinksList.react.jsx' ),
        Button = require( '../../shared/Button.react.jsx' );

    var LinksFormActionCreator = require( '../../../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../../../stores/LinksFormListStore' );

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

        getDefaultProps: function() {
            return {
                slug: null
            }
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
                            value={ this.props.slug }
                            placeholder='optional'
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