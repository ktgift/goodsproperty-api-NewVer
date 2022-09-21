module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define(
        'Like', {},
        {
            underscored: true
        }
    );

    Like.associate = models => { 
        Like.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Like.belongsTo(models.Property, {
          foreignKey: {
            name: 'propertyId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });
    }    

    return Like;
}