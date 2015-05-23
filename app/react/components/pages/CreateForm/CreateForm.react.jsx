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
        LinksList = require( './LinksList.react.jsx' ),
        SubmitBox = require( './SubmitBox.react.jsx' ),
        FormSubmitting = require( './FormSubmitting.react.jsx' ),
        FormSubmitted = require( './FormSubmitted.react.jsx' ),
        ErrorBox = require( './ErrorBox.react.jsx' );

    var LinksFormActionCreator = require( '../../../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../../../stores/LinksFormListStore' ),
        Constants = require( '../../../constants/HomepageConstants.js' );

    var LinksForm;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinksForm = React.createClass( {
        _style: {

        },
        _renderFormState: function() {
            switch( this._getStateFromStores().form_state ) {
                case( Constants.STATES.ENTERING ):
                    return (
                        <div>
                            {
                                ( this._getStateFromStores().error ) ? <ErrorBox error={ this._getStateFromStores().error } /> : undefined
                            }
                            <LinksList
                                links={ this._getStateFromStores().links } />
                            <SubmitBox
                                slug={ this._getStateFromStores().slug } />
                        </div>
                    );
                case( Constants.STATES.SUBMITTING ):
                    return (
                        <FormSubmitting />
                    );
                case( Constants.STATES.SUBMITTED ):
                    return (
                        <FormSubmitted
                            slug={ this._getStateFromStores().slug } />
                    );
            }
        },
        _getStateFromStores: function() {
            return {
                links: LinksFormListStore.getAll(),
                form_state: LinksFormListStore.getState(),
                slug: LinksFormListStore.getSlug(),
                error: LinksFormListStore.getError()
            };
        },
        _onChange: function() {
            this.setState( this._getStateFromStores() );
        },

        render: function() {
            return (
                <div>
                    {
                        this._renderFormState()
                    }
                </div>
            );
        },
        getDefaultProps: function() {
            return {
            }
        },
        getInitialState: function() {
            return this._getStateFromStores();
        },
        componentDidMount: function() {
            LinksFormListStore.addChangeListener( this._onChange );
        },
        componentDidUnmount: function() {
            LinksFormListStore.removeChangeListener( this._onChange );
        }
    } );
})();