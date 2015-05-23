/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var Title = require( './shared/Title.react.jsx' ),
        HeaderedList = require( './shared/HeaderedList.react.jsx' ),
        CreateForm = require( './pages/CreateForm/CreateForm.react.jsx' );

    var HomepageApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = HomepageApp = React.createClass( {
        render: function() {
            return (
                <div
                    className='container'>
                    <Title
                        title={ 'Rndmlnk' }
                        subtitle={ 'Creates a link that will randomly redirect to a list of other links' } />

                    <CreateForm />
                    <HeaderedList
                        title={ 'Sooo... What is this for?' }
                        listItems={ [
                            <a>
                                <b
                                    style={{ fontWeight: 'bold' }}>Easy, Developer-less, A/B Testing:</b> Want to find out which pricing model has better conversion? Use a Rndmlnk to send your customers to one or the other. No developer required.
                            </a>,
                            <a>
                                <b
                                    style={{ fontWeight: 'bold' }}>General Tom-foolery:</b> Create a link that randomly redirects your friends.
                            </a>
                        ] } />
                </div>
            );
        }
    } );
})();