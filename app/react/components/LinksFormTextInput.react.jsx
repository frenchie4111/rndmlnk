/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var LinksFormTextInput;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksFormTextInput = React.createClass( {
        getDefaultProps: function() {
            return {
                placeholder: 'http://example.com/',
                onChange: function() {},
                value: ''
            }
        },
        _style: {
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
                outline: 'none'
            }
        },
        _handleChange: function( event ) {
            this.props.onChange( event.target.value );
        },
        render: function() {
            console.log( this.props );
            return (
                <input
                    type='text'
                    style={ this._style.input }
                    value={ this.props.value }
                    onChange={ this._handleChange }
                    placeholder={ this.props.placeholder } />
            );
        }
    } );
})();