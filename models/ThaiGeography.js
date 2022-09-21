module.exports = (sequelize, DataTypes) => {
    const ThaiGeography = sequelize.define(
        'ThaiGeography', 
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
        ,
        {
            underscored: true,
            timestamps: false
        }
        );

        ThaiGeography.associate = models => {
            ThaiGeography.hasMany(models.ThaiProvince, {
              foreignKey: {
                name: 'geographyId',
                allowNull: false
              },
              onUpdate: 'RESTRICT',
              onDelete: 'RESTRICT'
            });
        }

        return ThaiGeography;
};