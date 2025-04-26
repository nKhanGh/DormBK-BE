import { Request, Response } from 'express';
import {
  BuildingIdParamsDto,
  RoomCheckParamsDto,
} from '../Validations/rooms.validator';
import { RoomsService } from '@/Services/rooms.service';

export class RoomsController {
  private roomsService: RoomsService;

  constructor() {
    this.roomsService = new RoomsService();
    console.log('RoomsController initialized');
  }

  async getUnderoccupiedRooms(_req: Request, res: Response): Promise<void> {
    try {
      const result = await this.roomsService.getUnderoccupiedRooms();
      res.json({ result });
    } catch (err) {
      res.status(500).json({ error: 'Failed to list all underoccupied rooms' });
    }
  }

  async getUnderoccupiedRoomsByBuildingId(
    req: Request<BuildingIdParamsDto>,
    res: Response,
  ): Promise<void> {
    try {
      const { buildingId } = req.params;
      const result =
        await this.roomsService.getUnderoccupiedRoomsByBuildingId(buildingId);
      res.json({ result });
    } catch (err) {
      res.status(500).json({ error: 'Failed to get rooms by building' });
    }
  }

  async checkUnderoccupiedRoom(
    req: Request<RoomCheckParamsDto>,
    res: Response,
  ): Promise<void> {
    try {
      const { buildingId, roomId } = req.params;
      const result = await this.roomsService.checkUnderoccupiedRoom(
        buildingId,
        roomId,
      );
      res.json({ result });
    } catch (err) {
      res.status(500).json({ error: 'Failed to check one room' });
    }
  }
}
