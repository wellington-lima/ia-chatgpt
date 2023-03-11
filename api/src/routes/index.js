import { Router } from 'express';
import { sendText } from '../controllers/prompt-controller.js';

const routes = Router();

routes.get('/api/prompt', sendText);

export default routes;