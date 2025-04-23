import { Request, Response } from "express";
import prisma from "@/Config/prisma.config";

class StatisticController {
  static getCountDisciplined(req: Request, res: Response) {

  }

  static async getTotalStudentByBuilding(req: Request, res: Response): Promise<void> {
    try {
      const { buildingId } = req.params;
      
      if (!buildingId || buildingId.length > 5) {
        res.status(400).json({ message: "Invalid buildingId" });
        return;
      }
  
      const result = await prisma.$queryRawUnsafe<{ totalstudents: number }[]>(
        `SELECT total_students_by_building('${buildingId}') AS totalstudents`
      );
      
      
  
      if (!result || result.length === 0) {
        res.status(404).json({ message: "No data found" });
        return;
      }
  
      res.json({ totalStudents: result[0].totalstudents });
    } catch (error) {
      console.error('Error fetching total students by building:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

  static getNumValidityDormCard(req: Request, res: Response) {
    //todo
  }
}

export default StatisticController;
