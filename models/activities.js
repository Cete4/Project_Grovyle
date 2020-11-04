module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Activities = sequelize.define("Activities", {
      // Giving the Activities model a name of type STRING
=======
    var Activities= sequelize.define("Activities", {
      // Giving the Activities model a name of type STRING
        ID: DataTypes.INTEGER,
>>>>>>> 28fd1cd49ef7e900127f23012c2787d9f988ce88
        ACTIVITY: DataTypes.STRING,
        ICON: DataTypes.INTEGER,
        THRESHOLD: DataTypes.INTEGER
    });
<<<<<<< HEAD
    // Activities.associate = function(models) {
    //   // Associating Activities with Calendar
    //   // When an Activities is deleted, also delete any associated Posts
    //   Activities.hasMany(models.Calendar, {
    //     onDelete: "cascade"
    //   });
    // };
    return Activities;
  };
=======
  
    Activities.associate = function(models) {
      // Associating Activities with Calendar
      // When an Activities is deleted, also delete any associated Posts
      Activities.hasMany(models.Calendar, {
        onDelete: "cascade"
      });
    };
  
    return Activities;
  };
  
>>>>>>> 28fd1cd49ef7e900127f23012c2787d9f988ce88
