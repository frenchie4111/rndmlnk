/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    module.exports = function( sequelize, DataTypes ) {
        var Link = sequelize.define( 'Link', {
            link: {
                type: DataTypes.STRING,
                allowNull: false
            },
            count: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            redirect_link_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            underscored: true,
            associate: function( models ) {
                Link.belongsTo( models.RedirectLink, { foreignKey: 'redirect_link_id', as: 'redirect_link' } );
            }
        } );

        // -------------- Class Methods --------------

        Link.publicFields = [
            'id',
            'link',
            'count'
        ];

        return Link;
    };
})();