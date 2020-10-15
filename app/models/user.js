// Example model

var pbkdf2 = require('pbkdf2-sha256');
var crypto = require('crypto');
var AuthorizationError = require('../helpers').error.AuthorizationError;

module.exports = function(sequelize, DataTypes) {

  User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      field: 'username'
    },
    firstName: {
      type: DataTypes.STRING(30),
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(30),
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING(75),
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(128),
    },
    isStaff: {
      type: DataTypes.BOOLEAN,
      field: 'is_staff'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active'
    },
    isSuperuser: {
      type: DataTypes.BOOLEAN,
      field: 'is_superuser'
    },
    lastLogin: {
      type: DataTypes.DATE,
      field: 'last_login'
    },
    dateJoined: {
      type: DataTypes.DATE,
      field: 'date_joined'
    }
  }, {
      tableName: 'auth_user',
      timestamps: false,
      getterMethods: {
        fullName: function() {
          return [this.firstName, this.lastName]
            .filter(function(element) {
              return !!element;
            }).join(' ') || this.username;
        }
      },
      classMethods: {
        validate: function(username, password) {
          return User.findOne({
              where: {
                username: username
              }
            })
            .then(function(user) {
              if (user === undefined || user.password === undefined) {
                throw new AuthorizationError('Invalid User');
              }

              var savedPassword = user.password.split('$'),
                shasum = savedPassword[2],
                salt = savedPassword[1],
                algorithm = savedPassword[0]

                if (algorithm=='pbkdf2_sha256'){
                  return pbkdf2(password, new Buffer(shasum), salt, 32).toString('base64') === savedPassword[3]
                } else {
                  calculatedSHA = crypto.createHash('SHA1');
                  calculatedSHA.update(salt+password);
                }

                var result = calculatedSHA.digest('hex')
                if (shasum == result) {
                  return true;
                }
                throw new AuthorizationError('Invalid Password');
              })
              .catch(AuthorizationError, function(error) {
                return false;
              });
        },
        associate: function(models) {
          User.belongsToMany(models.Group, {
            through: 'auth_user_groups',
            foreignKey: 'user_id'
          });
          User.belongsToMany(models.AuthPermission, {
            through: 'auth_user_user_permissions',
            foreignKey: 'user_id'
          });
          User.hasOne(models.UserProfile, {
            foreignKey: 'user_id'
          });
        }
      },
      instanceMethods: {

        /**
         * This method resolves the relevant client for given logged in user,
         * Once client is obtained all the operations happen on client
         **/

        //getClient: function() {
        //  var client = "";
        //  return this.getClientUser().then(function(client) {
        //    //console.log("clienr")
        //    //console.log(client)
        //    //if(client==null){
        //    //   return this.client;
        //    //}else{
        //      return client.getClient();
        //    //}
        //
        //  });
        //},
    }
  });
  return User;
};
