import Book from '@models/book';
import { Document } from 'mongoose';

class BookRepository {
  constructor() {}

  public async getAll(): Promise<Document[]> {
    const res = await Book.find();
    return res;
  }

  public async insert(data: object): Promise<void> {
    const book = new Book(data);
    await book.save();
  }

  public async verifyIfSlugExists(slug: string): Promise<Document> {
    const res = await Book.findOne({ slug });
    return res;
  }
}

export default new BookRepository();
