/**
  * Database configuration
  * Used in connection.js to create a connection with this db
**/
const data = {
  host: '35.198.8.0',
  user: 'root',
  password: "Medell1n", //Medell1n
  database: 'Envigado'
};

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,text)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


module.exports = data
