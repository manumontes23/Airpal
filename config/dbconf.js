/**
  * Database configuration
  * Used in connection.js to create a connection with this db
**/
const data = {
  host: 'remotemysql.com',
  user: 'ae1Q6As4pi',
  password: "ppAjm33oL1", //Medell1n
  database: 'ae1Q6As4pi'
};

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,text)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


module.exports = data
