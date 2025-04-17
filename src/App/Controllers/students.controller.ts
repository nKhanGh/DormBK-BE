import { Request, Response } from 'express';

class StudentController{
    static getStudent(req: Request, res: Response){
        //todo
        res.status(200).json({ message: 'Danh sách sinh viên' });
    }

    static getStudentBySsn(req: Request, res: Response){
        //todo
    }

    static post(req: Request, res: Response){
        //todo
    }

    static put(req: Request, res: Response){
        //todo
    }

    static delete(req: Request, res: Response){
        //todo
    }

    static getNoRelative(req: Request, res: Response){
        //todo
    }
}

export default StudentController;