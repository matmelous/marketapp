// const Sequelize = require("sequelize"); 

// // Conexão com o banco de dados MySql     
//   const sequelize = new Sequelize('appmercado', 'root', 'aninhavitoria29', {
//     host: 'localhost',
//     dialect: 'mysql',
//     query:{ 
//       raw:true
//     }
//   });

//   sequelize.authenticate().then(function(){
//     console.log( ' deu tudo certo!! ' )
//   }).catch(function(erro){
//     console.log( 'deu error: ' + erro )
//   })

// const Produto = sequelize.define('produtos', {
//   mercado:{
//     type: Sequelize.STRING
//   },
//   produto:{
//     type: Sequelize.STRING
//   },
//   marca: {
//     type: Sequelize.STRING
//   },
//   valor:{
//     type: Sequelize.INTEGER
//   }, 
//   peso :{
//     type: Sequelize.INTEGER
//   }
// })

// Produto.create({
//   mercado: "Condor",
//   produto: "Maça",
//   marca: "Frutas",
//   valor: 1,
//   peso: 423
// })