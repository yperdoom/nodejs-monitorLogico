const Sequelize = require("sequelize");
const instancia = new Sequelize(
    'petshop',
    'root',
    '123456',
    {
        host: '10.0.0.103',
        dialect: 'mysql'
    }
)


module.exports = instancia