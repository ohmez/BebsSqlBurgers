
module.exports = function(sequelize, DataTypes) {
var Burgers = sequelize.define('burgers',{
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
    }
    },{
    timestamps:false});
    return Burgers;
};