import express from 'express';
const router = express.Router();
import AuthController from '../App/Controllers/auth.controller';

router.post('/login', AuthController.postLogin);
router.post('/login', AuthController.postLogout);

export default router;
