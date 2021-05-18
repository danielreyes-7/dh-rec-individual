"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
        },
        { tableName: "Series" }
    );
    Serie.associate = function (models) {
        Serie.hasMany(models.Season, {
            as: "Season",
            foreignKey: "serieId",
        });
    };
    return Serie;
};
