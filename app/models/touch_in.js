module.exports = function(sequelize, DataTypes) {

  var TouchIn = sequelize.define('TouchIn', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      field: 'first_name',
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    }
  }, {
    tableName: 'touch_in',
    timestamps: false,
    classMethods: {
      associate: function(models) {}
    }
  });
  return TouchIn;
};
