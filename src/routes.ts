import { Router } from 'express';
import bookController from '@controllers/bookController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({
  repository: 'https://github.com/MTevangelista/books-api',
  routes: {
    getAll: 'https://books-backend-api.herokuapp.com/api/books',
    getBySlug: 'https://books-backend-api.herokuapp.com/api/books/:slug',
    post: 'https://books-backend-api.herokuapp.com/api/books',
    put: 'https://books-backend-api.herokuapp.com/api/books/api/books/:_id',
    delete: 'https://books-backend-api.herokuapp.com/api/books/api/books/:_id',
  },

}));
routes.get('/api/books', bookController.getAll);
routes.get('/api/books/:slug', bookController.getBySlug);
routes.post('/api/books', bookController.post);
routes.put('/api/books/:_id', bookController.put);
routes.delete('/api/books/:_id', bookController.delete);

export default routes;
