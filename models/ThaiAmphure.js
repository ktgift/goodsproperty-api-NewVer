module.exports = (sequelize, DataTypes) => {
    const ThaiAmphure = sequelize.define(
        'ThaiAmphure', 
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

    ThaiAmphure.associate = models => {
        ThaiAmphure.belongsTo(models.ThaiProvince, {
          foreignKey: {
            name: 'provinceId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });

        ThaiAmphure.hasMany(models.ThaiTambon, {
            foreignKey: {
                name: 'amphureId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        ThaiAmphure.hasMany(models.Property, {
            foreignKey: {
                name: 'amphureId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    }

    return ThaiAmphure;
}