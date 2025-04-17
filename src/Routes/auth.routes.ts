import express from 'express';
const router = express.Router();
import AuthController from '../App/Controllers/auth.controller';

router.post('/api/login', AuthController.postLogin);
router.post('/api/login', AuthController.postLogout);

export default router;
