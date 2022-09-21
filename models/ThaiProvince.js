module.exports = (sequelize, DataTypes) => {
    const ThaiProvince = sequelize.define(
        'ThaiProvince', 
        {   
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nameTh: {
                type: DataTypes.STRING,
                allowNull: false                
            },
            nameEn: {
                type: DataTypes.STRING,
                allowNull: false                
            }
        },
        {
            underscored: true,
            paranoid: true
        }
    );

    ThaiProvince.associate = models => {
        ThaiProvince.belongsTo(models.ThaiGeography, {
          foreignKey: {
            name: 'geographyId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });

        ThaiProvince.hasMany(models.ThaiAmphure, {
            foreignKey: {
                name: 'provinceId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        ThaiProvince.hasMany(models.Property, {
            foreignKey: {
                name: 'provinceId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    }

    return ThaiProvince;
}