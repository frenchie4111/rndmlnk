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
        LinkInfo = require( './pages/LinkInfo/LinkInfo.react.jsx' );

    var LinkInfoApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = LinkInfoApp = React.createClass( {
        getDefaultProps: function() {
            return {
                link: 'asdf',
                links: []
            }
        },
        _style: {
        },
        render: function() {
            return (
                <div
                    className='container'>
                    <Title
                        title={ 'Link Information Page' }
                        subtitle={ this.props.link } />

                    <LinkInfo
                        links={ this.props.links }
                        total={ this.props.total }/>
                </div>
            );
        }
    } );
})();