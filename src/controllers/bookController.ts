import { Request, Response } from 'express';
import bookRepository from '@repositories/bookRepository';

class BookController {
  constructor() { }

  // @route    GET /api/books
  // @desc     LIST books
  // @access   Public
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const books = await bookRepository.getAll();
      return res.json(books);
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // @route    GET /api/books
  // @desc     LIST book
  // @access   Public
  public async getBySlug(req: Request, res: Response): Promise<Response> {
    const { slug } = req.params;

    try {
      const book = await bookRepository.getBySlug(slug);
      return res.json(book);
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // @route    POST /api/books
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
