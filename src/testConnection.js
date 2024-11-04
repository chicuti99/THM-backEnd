import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('soccer_data', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  } finally {
    await sequelize.close(); 
  }
}

testConnection();
