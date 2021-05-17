"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
        },
        { tableName: "series" }
    );
    Serie.associate = function (models) {
        Serie.hasMany(models.Season, {
            as: "season",
            foreignKey: "serieId",
        });
    };
    return Serie;
};
