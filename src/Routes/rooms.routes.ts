import express from 'express';
import { RoomsController } from '@/App/Controllers/rooms.controller';
import { validateAll } from '@/App/Middlewares/validate';
import {
  BuildingIdParams,
  RoomCheckParams,
} from '@/App/Validations/rooms.validator';

const roomsRouter = express.Router();
const roomsController = new RoomsController();

roomsRouter
  .get('/', roomsController.getAllRooms.bind(roomsController))
  .get(
    '/underoccupied',
    roomsController.getUnderoccupiedRooms.bind(roomsController),
  )
  .get(
    '/:buildingId',
    validateAll({ params: BuildingIdParams }),
    roomsController.getRoomsByBuildingId.bind(roomsController),
  )
  .get(
    '/underoccupied/:buildingId',
    validateAll({ params: BuildingIdParams }),
    roomsController.getUnderoccupiedRoomsByBuildingId.bind(roomsController),
  )
  .get(
    '/underoccupied/:buildingId/:roomId',
    validateAll({ params: RoomCheckParams }),
    roomsController.checkUnderoccupiedRoom.bind(roomsController),
  );

export default roomsRouter;
