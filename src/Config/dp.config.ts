import mysql from 'mysql2/promise';

async function connect() {
    try {
      const con = await mysql.createConnection({
        host: 'localhost',
        user: 'hcmutDorm',
        password: 'hcmutDorm123',
        database: 'ktx'
      });
  
      console.log('Connected to MySQL!');
      return con;
    } catch (err) {
      console.error('Connection error:', err);
      throw err;
    }
}
  
export default connect;