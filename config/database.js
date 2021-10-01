// Archivo de configuracion
require('dotenv').config();

module.exports = {
  
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "disney_personajes",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",

    //SEEDS
    seederStorage: "sequelize",
    seederTableTableName: "seeds",

    //Configuracion de Migraciones
    migrationStorage: "sequelize",
    migrtionStorageTableName: "migrations"
  
}