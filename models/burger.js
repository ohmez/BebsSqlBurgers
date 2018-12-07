var db = require("../models");
module.exports = function(sequelize, DataTypes) {
var Burger = sequelize.define('burger',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2,60]
        }
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }});
    return Burger;
};