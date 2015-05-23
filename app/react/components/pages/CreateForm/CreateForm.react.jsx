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
        LinksFormSubmitBox = require( './SubmitBox.react.jsx' );

    var LinksFormActionCreator = require( '../../../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../../../stores/LinksFormListStore' );

    var LinksForm;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksForm = React.createClass( {
        getDefaultProps: function() {
            return {
            }
        },
        _style: {

        },
        render: function() {
            return (
                <div>
                    <LinksFormTableView />
                    <LinksFormSubmitBox />
                </div>
            );
        }
    } );
})();