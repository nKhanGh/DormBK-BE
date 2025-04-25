import pool from '@/Config/db.config';
import { UnderoccupiedRoom } from '@/Interfaces/rooms.interface';

export class RoomsService {
  constructor() {
    console.log('RoomsService initialized');
  }

  async getUnderoccupiedRooms(): Promise<UnderoccupiedRoom[]> {
    const result = await pool.query('CALL list_all_underoccupied_rooms()');
    const rows = result[0] as UnderoccupiedRoom[];

    return rows;
  }

  async getUnderoccupiedRoomsByBuildingId(
    buildingId: string,
  ): Promise<UnderoccupiedRoom[]> {
    const result = await pool.query('CALL list_underoccupied_by_building(?)', [
      buildingId,
    ]);
    const rows = result[0] as UnderoccupiedRoom[];

    return rows;
  }

  async checkUnderoccupiedRoom(
    buildingId: string,
    roomId: string,
  ): Promise<UnderoccupiedRoom[]> {
    const result = await pool.query('CALL check_one_room_underoccupied(?, ?)', [
      buildingId,
      roomId,
    ]);
    const rows = result[0] as UnderoccupiedRoom[];

    return rows;
  }
}
