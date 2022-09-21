module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    "Property", 
    {
        announcer_status: {
            type: DataTypes.ENUM("owner", "agent"),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        sale_status: {
            type: DataTypes.ENUM('inStock', 'sold'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.ENUM('residence', 'commercial'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        postType: {
            type: DataTypes.ENUM('rent', 'sale', 'saleDown'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        noBedrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        noBathroom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        noFloor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        homeSize: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        landSize: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        location: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        rentalPrice: {
            type: DataTypes.INTEGER
        },
        salePrice: {
            type: DataTypes.INTEGER
        },
        qrLine: {
            type: DataTypes.STRING
        },
        comfirmPost: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        rating: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
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

    Property.associate = models => {
        Property.hasMany(models.Interest, {
          foreignKey: {
            name: 'propertyId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });

        Property.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Property.hasMany(models.Like, {
            foreignKey: {
                name: 'propertyId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
        
        Property.belongsTo(models.ThaiProvince, {
            foreignKey: {
                name: 'provinceId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Property.belongsTo(models.ThaiAmphure, {
            foreignKey: {
                name: 'amphureId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Property.belongsTo(models.ThaiTambon, {
            foreignKey: {
                name: 'tambonId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Property.belongsTo(models.PropertyType, {
            foreignKey: {
                name: 'propertyTypeId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    }

    return Property;
};
