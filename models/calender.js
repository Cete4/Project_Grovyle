module.exports = function(sequelize, DataTypes) {
    var Calendar= sequelize.define("Calendar", {

        DATE: DataTypes.DATETIME,
        LOCATION: DataTypes.STRING,
        TEMP: DataTypes.INTEGER, 
        ICON: DataTypes.INTEGER
    });
  
    Calendar.associate = function(models) {
      // Associating Calendar with Posts
      // When an Calendar is deleted, also delete any associated Posts
      Calendar.hasMany(models.Post, {
        onDelete: "cascade"
      });
      Calendar.hasMany(models.Activities, {
        onDelete: "cascade"
      });
    };
  
    return Calendar;
  };
  