import express from 'express';
const router = express.Router();
import RoomController from '../App/Controllers/rooms.controller';

router.get('/api/rooms/underoccupied', RoomController.getUnderoccupied);
router.get('/api/rooms/underoccupied/:buildingId', RoomController.getUnderoccupiedBuilding);
router.get('/api/rooms/underoccupied/:buildingId/:roomId', RoomController.getUnderoccupiedBuildingRoom);


export default router;
