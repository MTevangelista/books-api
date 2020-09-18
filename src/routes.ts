import { Router } from 'express';
import bookController from '@controllers/bookController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));
routes.get('/api/books', bookController.getAll);
routes.get('/api/books/:slug', bookController.getBySlug);
routes.post('/api/books', bookController.post);
routes.put('/api/books/:_id', bookController.put);

export default routes;
