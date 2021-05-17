"use strict";
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        "Season",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
        },
        { tableName: "season" }
    );
    Season.associate = function (models) {
        Season.belongsTo(models.Serie, {
            as: "series",
            foreignKey: "seasonId",
        });
        Season.hasMany(models.Episode, {
            as: "episodes",
            foreignKey: "seasonId",
        });
    };
    return Season;
};
