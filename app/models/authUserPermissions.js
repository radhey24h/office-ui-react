module.exports = function(sequelize, DataTypes) {

  var AuthUserPermissions = sequelize.define('AuthUserPermissions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id : {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    permission_id : {
      type: DataTypes.INTEGER,
      field: 'permission_id'
    }
  }, {
    tableName: 'auth_user_user_permissions',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        AuthUserPermissions.belongsTo(models.AuthPermission, {
          foreignKey: 'permission_id'
        });
        AuthUserPermissions.belongsTo(models.User, {
          foreignKey: 'user_id'
        });

      }
    }
  });

  return AuthUserPermissions;
};