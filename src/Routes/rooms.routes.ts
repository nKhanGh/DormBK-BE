import express from 'express';
const router = express.Router();
import RoomController from '../App/Controllers/rooms.controller';

router.get('/underoccupied', RoomController.getUnderoccupied);
router.get('/underoccupied/:buildingId', RoomController.getUnderoccupiedBuilding);
router.get('/underoccupied/:buildingId/:roomId', RoomController.getUnderoccupiedBuildingRoom);


export default router;
