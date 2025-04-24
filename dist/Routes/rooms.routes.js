"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const rooms_controller_1 = __importDefault(require("../App/Controllers/rooms.controller"));
router.get('/underoccupied', rooms_controller_1.default.getUnderoccupied);
router.get('/underoccupied/:buildingId', rooms_controller_1.default.getUnderoccupiedBuilding);
router.get('/underoccupied/:buildingId/:roomId', rooms_controller_1.default.getUnderoccupiedBuildingRoom);
exports.default = router;
