
//import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize(
//   process.env.DB_NAME ,
//   process.env.DB_USER ,
//   process.env.DB_PASSWORD ,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//   }
// );

// export default sequelize;


// import mysql from 'mysql2/promise';

// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'soccer_data'
// });

// export default connection;


// const sequelize = new Sequelize('soccer_data', 'user', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// module.exports = sequelize;

// export default sequelize;


import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('soccer_data', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
})();

export default sequelize;
