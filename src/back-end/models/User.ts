import db from './db'
import Sequelize from 'sequelize'

const Users = db.sequelize.define('usuarios', {
  nome:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  senha:{
    type: Sequelize.INTEGER
  }, 

})

export default module.exports = Users
