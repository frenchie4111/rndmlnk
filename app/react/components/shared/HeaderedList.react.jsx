/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var Title;

    module.exports = Title = React.createClass( {
        getDefaultProps: function() {
            return {
                title: 'Title',
                listItems: [ 'Item' ]
            };
        },
        _style: {
            div: {
                color: '#ECF0F1',
                marginTop: 25
            },
            h1: {
                fontSize: 24,
                paddingBottom: 17,
                paddingTop: 4.5
            },
            ul: {
                listStyleType: 'disc'
            },
            li: {
                marginRight: 15,
                marginLeft: 45,
                lineHeight: '1.3em',
                marginBottom: 15
            }
        },
        render: function() {
            var _this = this;
            return (
                <div
                    style={ _this._style.div }>
                    <h1
                        style={ _this._style.h1 }>
                        { _this.props.title }
                    </h1>

                    <ul
                        style={ _this._style.ul }>
                        {
                            _this.props.listItems
                                .map( function( item ) {
                                    return <li
                                                style={ _this._style.li }>{ item }</li>
                                } )
                        }
                    </ul>
                </div>
            );
        }
    } );
})();
