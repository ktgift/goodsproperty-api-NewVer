module.exports = (sequelize, DataTypes) => {
  const PropertyType = sequelize.define(
    "PropertyType",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      maintype: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true,
    }
  );

  PropertyType.associate = models => {
    PropertyType.hasMany(models.Property, {
      foreignKey: {
        name: 'propertyTypeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  }

  return PropertyType;
};
