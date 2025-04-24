"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const statistics_controller_1 = __importDefault(require("../App/Controllers/statistics.controller"));
router.get('/disciplined-students', statistics_controller_1.default.getCountDisciplined);
router.get('/total-students/:buildingId', statistics_controller_1.default.getTotalStudentByBuilding);
router.get('/valid-dormitory-cards', statistics_controller_1.default.getNumValidityDormCard);
exports.default = router;
