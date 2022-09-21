module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
        {
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            lastname: {
                type:   DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }             
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            profilePic: DataTypes.STRING
    },
    {
      underscored: true
    }
    );

    User.associate = models => {
        User.hasMany(models.Property, {
          foreignKey: {
            name: 'userId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });

        User.hasMany(models.Like, {
          foreignKey: {
            name: 'userId',
            allowNull: false
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        });
    }    
    
    return User;
};
