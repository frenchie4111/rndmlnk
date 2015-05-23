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

    var Bar = require( './Box.react.jsx' );

    var TableView;

    module.exports = TableView = React.createClass( {
        getDefaultProps: function() {
            return {
                renderHeader: function() {},
                renderRow: function() {},
                data: []
            };
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
