"use strict";
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        "Season",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
        },
        { tableName: "Season" }
    );
    Season.associate = function (models) {
        Season.belongsTo(models.Serie, {
            as: "Series",
            foreignKey: "seasonId",
        });
        Season.hasMany(models.Episode, {
            as: "Episodes",
            foreignKey: "seasonId",
        });
    };
    return Season;
};
