import { Application } from 'express';
import auth from './auth.routes';
import students from './students.routes';
import statisticsRouter from './statistics.routes';
import roomsRouter from './rooms.routes';

function route(app: Application): void {
  app.use('/api/students', students);
  app.use('/api/statistics', statisticsRouter);
  app.use('/api/rooms', roomsRouter);
  app.use('/api/auth', auth);
}

export default route;
