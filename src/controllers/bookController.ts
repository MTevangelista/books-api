import { Request, Response } from 'express';
import bookRepository from '@repositories/bookRepository';

class BookController {
  constructor() { }

  // @route    GET /api/book
  // @desc     LIST book
  // @access   Public
  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const books = await bookRepository.getAll();
      return res.json(books);
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // @route    POST /api/book
  // @desc     CREATE book
  // @access   Public
  public async post(req: Request, res: Response): Promise<Response> {
    const {
      imageUrl, author, title, slug, theme, description, createdAt,
    } = req.body;

    const book = {
      imageUrl,
      author,
      title,
      slug,
      theme,
      description,
      createdAt,
    };

    const existingSlug = await bookRepository.verifyIfSlugExists(slug);

    if (existingSlug) {
      return res.status(409).json({ message: 'Slug already exists!' });
    }

    try {
      await bookRepository.insert(book);
      return res.status(201).json({ message: 'Book created with success' });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }
}

export default new BookController();
