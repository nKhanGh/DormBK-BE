import pool from '@/Config/db.config';

export class DormitoryCardService {
  static async checkDormitoryCard(ssn: string): Promise<any> {
    const [rows] = await pool.query(
      'SELECT check_dormitory_card(?) AS validity',
      [ssn],
    );
    return (rows as any[])[0];
  }

  static async setDormitoryCard(ssn: string): Promise<any> {
    const [rows] = await pool.query('CALL create_dormitory_card(?)', [ssn]);
    return (rows as any[])[0];
  }
}
