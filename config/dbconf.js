const args = require('./input');

const data = {
  host: 'remotemysql.com',
  user: args.user,
  password: args.password, //Medell1n
  database: 'ae1Q6As4pi'
} 
console.log(data);
module.exports = data
