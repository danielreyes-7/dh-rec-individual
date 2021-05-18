"use strict";
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define(
        "Episode",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
        },
        { tableName: "Episodes" }
    );
    Episode.associate = function (models) {
        Episode.belongsTo(models.Season, {
            as: "Season",
            foreignKey: "episodeId",
        });
    };
    return Episode;
};
