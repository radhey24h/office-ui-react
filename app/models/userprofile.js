module.exports = function(sequelize, DataTypes) {

  var UserProfile = sequelize.define('UserProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    company: DataTypes.STRING(100),
  }, {
    tableName: 'user_profile',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        UserProfile.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return UserProfile;
};
