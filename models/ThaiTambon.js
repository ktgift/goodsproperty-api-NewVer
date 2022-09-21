module.exports = (sequelize, DataTypes) => {
    const ThaiTambon = sequelize.define(
        'ThaiTambon', 
        {   
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            zipCode: {
                type: DataTypes.INTEGER,
                allowNull: false
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
    )

    ThaiTambon.associate = models => {
        ThaiTambon.belongsTo(models.ThaiAmphure, {
          foreignKey: {
            name: 'amphureId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });

        ThaiTambon.hasMany(models.Property, {
          foreignKey: {
            name: 'tambonId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });
    }

    return ThaiTambon;
}