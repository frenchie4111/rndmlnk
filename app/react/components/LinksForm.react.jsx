/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'React' );

    var Bar = require( './Bar.react.jsx' ),
        TableView = require( './TableView.react.jsx' ),
        LinksFormTableView = require( './LinksFormTableView.react.jsx' ),
        LinksFormSubmitBox = require( './LinksFormSubmitBox.react.jsx' );

    var LinksFormActionCreator = require( '../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../stores/LinksFormListStore' );

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