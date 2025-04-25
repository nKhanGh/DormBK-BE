import express from 'express';
import { StatisticsController } from '@/App/Controllers/statistics.controller';
import { validateAll } from '@/App/Middlewares/validate';
import {
  GetDisciplinedStudents,
  BuildingIdParams,
} from '@/App/Validations/statistics.validator';

const statisticsRouter = express.Router();
const statisticsController = new StatisticsController();

statisticsRouter
  .get(
    '/disciplined-students',
    validateAll({ query: GetDisciplinedStudents }),
    statisticsController.getDisciplinedStudents.bind(statisticsController),
  )
  .get(
    '/total-students/:buildingId',
    validateAll({ params: BuildingIdParams }),
    statisticsController.getTotalStudentsByBuilding.bind(statisticsController),
  )
  .get(
    '/valid-dormitory-cards',
    statisticsController.getValidDormitoryCards.bind(statisticsController),
  );

export default statisticsRouter;
