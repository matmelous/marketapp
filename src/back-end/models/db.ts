import { Sequelize } from "sequelize"; 

// Conexão com o banco de dados MySql     
  const sequelize = new Sequelize('appmercado', 'root', 'aninhavitoria29', {
      host: 'localhost',
      dialect: 'mysql',
      query:{ 
        raw:true
      }
  });

export default module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}