module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(100),
  }, {
    tableName: 'auth_group',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Group.belongsToMany(models.User, {
          through: 'auth_user_groups',
          foreignKey: 'group_id'
        });
      }
    }
  });
  return Group;
};
