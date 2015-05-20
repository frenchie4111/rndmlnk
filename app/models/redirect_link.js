/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    module.exports = function( sequelize, DataTypes ) {
        var RedirectLink = sequelize.define( 'RedirectLink', {
            redirect_link: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            underscored: true,
            associate: function( models ) {
            }
        } );

        // -------------- Class Methods --------------

        RedirectLink.publicFields = [
            'id',
            'redirect_link'
        ];

        return RedirectLink;
    };
})();