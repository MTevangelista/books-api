import { Router } from 'express';
import bookController from '@controllers/bookController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));
routes.post('/api/books', bookController.post);

export default routes;
