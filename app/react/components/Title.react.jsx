/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var Title;

    module.exports = Title = React.createClass( {
        getDefaultProps: function() {
            return {
                title: '',
                subtitle: ''
            };
        },
        _style: {
            div: {
                color: '#ECF0F1',
                marginTop: 71
            },
            h1: {
                fontSize: 48,
                paddingBottom: 10,
                paddingTop: 10
            },
            h2: {
                fontSize: 24,
                paddingBottom: 4.5,
                paddingTop: 4.5
            }
        },
        render: function() {
            return (
                <div
                    style={ this._style.div }>
                    <h1
                        style={ this._style.h1 }>
                        { this.props.title }
                    </h1>

                    <h2
                        style={ this._style.h2 }>
                        { this.props.subtitle }
                    </h2>
                </div>
            );
        }
    } );
})();

/*
 .title {
 color: #ECF0F1;

 margin-top: 71px;
 }

 .title h1 {
 font-size: 48px;
 }

 .title h2 {
 font-size: 24px;
 }
 */