module.exports = (sequelize, DataTypes) => {
    const Interest = sequelize.define(
        'Interest', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                    notEmpty: true
                }
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
          underscored: true
        }
        
    );

    Interest.associate = models => {
        Interest.belongsTo(models.Property, {
          foreignKey: {
            name: 'propertyId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });
    }

    return Interest;
}