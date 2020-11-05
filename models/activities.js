module.exports = function(sequelize, DataTypes) {
    var Activities = sequelize.define("Activities", {
        // Giving the Activities model a name of type STRING
        ACTIVITY: DataTypes.STRING,
        ICON: DataTypes.INTEGER,
        THRESHOLD: DataTypes.INTEGER
    });
    // Activities.associate = function(models) {
    //   // Associating Activities with Calendar
    //   // When an Activities is deleted, also delete any associated Posts
    //   Activities.hasMany(models.Calendar, {
    //     onDelete: "cascade"
    //   });
    // };
    return Activities;
};