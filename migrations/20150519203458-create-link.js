module.exports = {
    up: function( migration, DataTypes ) {
        return migration
            .createTable( 'Links', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },

                redirect_link_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: 'RedirectLinks',
                    referenceKey: 'id',
                    onUpdate: 'RESTRICT',
                    onDelete: 'RESTRICT'
                },
                link: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                count: {
                    type: DataTypes.INTEGER,
                    defaultValue: 0
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
    down: function( migration ) {
        return migration
            .dropTable( 'Links' );
    }
};