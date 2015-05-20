module.exports = {
    up: function( migration, DataTypes ) {
        return migration
            .createTable( 'RedirectLinks', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },

                redirect_link: {
                    type: DataTypes.STRING,
                    allowNull: false
                },

                created_at: {
                    type: DataTypes.DATE,
                    allowNull: false
                },
                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: false
                }
            } );
    },
    down: function( migration, DataTypes ) {
        return migration
            .dropTable( 'RedirectLinks' );
    }
};