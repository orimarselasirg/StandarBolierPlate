const {sequelize, DataTypes, Op } = require ('../db/db')


const Test1 = sequelize.define('test', {
    test : {
        type : DataTypes.STRING,
        allowNul : false
    }
},
{
   freezeTableName : true 
})

module.exports = Test1