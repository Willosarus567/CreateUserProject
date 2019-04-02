'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRoles = sequelize.define('UserRoles', {
    role: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return UserRoles;
};