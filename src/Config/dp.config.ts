import mysql from "mysql2/promise";
let connection: mysql.Connection;

async function connect() {
  if (connection) return connection;

  try {
    connection = await mysql.createConnection({
      host: "hopper.proxy.rlwy.net",
      user: "root",
      password: "SympYtUKAztewpaknIMZjUcyoohxiTMm",
      port: 52246,
      database: "railway",
    });

    console.log("Connected to MySQL!");
    return connection;
  } catch (err) {
    console.error("Connection error:", err);
    throw err;
  }
}

export default connect;
