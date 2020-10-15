module.exports = function(sequelize, DataTypes) {

  var AuthPermission = sequelize.define('AuthPermission', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        notNull: true
    },
    contentTypeId: {
        type: DataTypes.INTEGER,
        unique: true,
        field: 'content_type_id'
    },
    codename: {
        type: DataTypes.STRING(100),
        unique: true
    },
  }, {
    tableName: 'auth_permission',
    timestamps: false,
    classMethods: {
      associate: function(models) {
          AuthPermission.belongsToMany(models.User, {
            through: 'auth_user_user_permissions',
            foreignKey: 'permission_id'
          });
      }
    }
  });

  return AuthPermission;
};
