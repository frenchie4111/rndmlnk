/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' ),
        _ = require( 'underscore' );

    var Bar = require( './Bar.react.jsx' );

    var TableView;

    module.exports = TableView = React.createClass( {
        getDefaultProps: function() {
            return {
                renderHeader: function() {},
                renderRow: function() {},
                data: []
            };
        },
        _style: {
            div: {
                marginTop: 17
            },
            header: {
                backgroundColor: '#3498DB',
                color: '#ECF0F1'
            },
            row: {
                backgroundColor: '#D8D8D8'
            }
        },
        render: function() {
            var _this = this;

            return (
                <div
                    style={ this.props.style }>
                    <div>
                        { this.props.renderHeader() }
                    </div>
                    { this.props.data
                        .map( function( item, i ) {
                            return (
                                <div key={ i }>
                                    { _this.props.renderRow( item, i ) }
                                </div>
                            );
                        } )
                    }
                </div>
            );
        }
    } );
})();
