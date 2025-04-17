import mysql from 'mysql2/promise';
let connection: mysql.Connection;

async function connect() {
  if (connection) return connection;

  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "NguyenHuuKhang",
      password: "Hk@14102005",
      database: 'ktx'
    });

    console.log('Connected to MySQL!');
    return connection;
  } catch (err) {
    console.error('Connection error:', err);
    throw err;
  }
}

export default connect;