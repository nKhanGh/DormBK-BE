import { Request, Response } from 'express';
import { StatisticsService } from '@/Services/statistics.service';
import {
  GetDisciplinedStudentsDto,
  BuildingIdParamsDto,
} from '../Validations/statistics.validator';

export class StatisticsController {
  private statisticsService: StatisticsService;

  constructor() {
    this.statisticsService = new StatisticsService();
    console.log('StatisticsController initialized');
  }

  async getDisciplinedStudents(
    req: Request<{}, {}, {}, GetDisciplinedStudentsDto>,
    res: Response,
  ): Promise<void> {
    try {
      const { startDate, endDate } = req.query;
      const { totalDisciplinedStudents } =
        await this.statisticsService.getDisciplinedStudents(startDate, endDate);
      res.json({ totalDisciplinedStudents });
    } catch (err) {
      res
        .status(500)
        .json({ error: 'Failed to get disciplined students count' });
    }
  }

  async getTotalStudentsByBuilding(
    req: Request<BuildingIdParamsDto>,
    res: Response,
  ): Promise<void> {
    try {
      const { buildingId } = req.params;
      const { totalStudents } =
        await this.statisticsService.getTotalStudentsByBuilding(buildingId);
      res.json({ totalStudents });
    } catch (err) {
      res
        .status(500)
        .json({ error: 'Failed to get total students by building' });
    }
  }

  async getValidDormitoryCards(_req: Request, res: Response): Promise<void> {
    try {
      const { validDormCards } =
        await this.statisticsService.getValidDormitoryCards();
      res.json({ validDormCards });
    } catch (err) {
      res
        .status(500)
        .json({ error: 'Failed to get valid dormitory cards count' });
    }
  }
}
