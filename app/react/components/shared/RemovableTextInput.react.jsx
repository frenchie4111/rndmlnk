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

    var Button = require( './Button.react.jsx' );

    var LinksFormTextInput;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksFormTextInput = React.createClass( {
        getDefaultProps: function() {
            return {
                placeholder: 'http://example.com/',
                onChange: function() {},
                onDelete: function() {},
                value: '',
                error: false
            }
        },
        _style: {
            div: {
                width: '100%',
                height: '100%',
                position: 'relative'
            },
            input: {
                margin: 0,
                width: '100%',
                height: '100%',
                border: 0,
                fontSize: 20,
                backgroundColor: '#ECF0F1',
                color: '#717477',
                paddingLeft: 23,
                paddingRight: 23,
                boxSizing: 'border-box',
                outline: 'none',
                error: {
                    backgroundColor: '#E74C3C'
                }
            },
            delete_button: {
                zIndex: 100,
                position: 'absolute',
                right: 20,
                top: 12,
                backgroundColor: '#E74C3C',
                color: '#ECF0F1',
                fontWeight: 'normal'
            }
        },
        _handleChange: function( event ) {
            this.props.onChange( event.target.value );
        },
        _getInputStyle: function() {
            var style = this._style.input;

            if( this.props.error ) {
                style = _.extend( style, this._style.input.error );
            }

            return style;
        },
        render: function() {
            return (
                <div
                    style={ this._style.div }>
                    <input
                        type='text'
                        style={ this._getInputStyle() }
                        value={ this.props.value }
                        onChange={ this._handleChange }
                        placeholder={ this.props.placeholder } />
                    <Button
                        style={ this._style.delete_button }
                        onClick={ this.props.onDelete }>
                        Remove
                    </Button>
                </div>
            );
        }
    } );
})();