import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'
import { config } from 'dotenv'
config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectModule: mysql2,
    max: 30, // максимальное количество соединений в пуле
    idleTimeoutMillis: 60000, // время ожидания до закрытия неиспользуемого соединения
    connectionTimeoutMillis: 2000,
    dialectOptions: {
        connectTimeout: 5000, // установите тайм-аут подключения в 5 секунд
        // requestTimeout: 5000, // установите тайм-аут запроса в 5 секунд
    },
})

export default sequelize
