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
        LinksFormTextInput = require( '../../shared/RemovableTextInput.react.jsx' );

    var LinksFormActionCreator = require( '../../../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../../../stores/LinksFormListStore' );

    var LinksSubmitting;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksSubmitting = React.createClass( {
        // Private
        _style: {
            div: {
                marginTop: 17,
                boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, .5)',
                backgroundColor: '#3498DB',
                color: '#ECF0F1',
                fontSize: 24,
                left: {
                    paddingLeft: 17,
                    float: 'left'
                }
            }
        },

        // React Methods
        render: function() {
            return (
                <Bar
                    style={ this._style.div }>
                    <div
                        style={ this._style.div.left }>
                        Creating Link...
                    </div>
                </Bar>
            );
        }
    } );
})();