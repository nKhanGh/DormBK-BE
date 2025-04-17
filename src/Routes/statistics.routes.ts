import express from 'express';
const router = express.Router();
import StatisticController from '../App/Controllers/statistics.controller';

router.get('/api/statistics/disciplined-students', StatisticController.getCountDisciplined);
router.get('/api/statistics/total-students/:buildingId', StatisticController.getTotalStudentByBuilding);
router.get('/api/statistics/valid-dormitory-cards', StatisticController.getNumValidityDormCard);


export default router;