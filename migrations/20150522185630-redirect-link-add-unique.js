'use strict';

module.exports = {
    up: function( migration, DataTypes ) {
        migration.sequelize
            .query( 'ALTER TABLE "RedirectLinks" ADD CONSTRAINT "RedirectLinksUniqueRedirectLink" UNIQUE( redirect_link );' );
    },

    down: function( migration, DataTypes ) {
        return migration.sequelize
            .query( 'ALTER TABLE "RedirectLinks" DROP CONSTRAINT "RedirectLinksUniqueRedirectLink"' );
    }
};
