import Book from '@models/book';
import { Document } from 'mongoose';

class BookRepository {
  constructor() {}

  public async getAll(): Promise<Document[]> {
    const res = await Book.find();
    return res;
  }

  public async getBySlug(slug): Promise<Document> {
    const res = await Book.findOne({
      slug,
    });

    return res;
  }

  public async insert(data: object): Promise<void> {
    const book = new Book(data);
    await book.save();
  }

  public async update(_id: string, {
    imageUrl, author, title, theme, description, createdAt,
  }): Promise<void> {
    await Book.findByIdAndUpdate(_id, {
      $set: {
        imageUrl,
        author,
        title,
        theme,
        description,
        createdAt,
      },
    });
  }

  public async verifyIfSlugExists(slug: string): Promise<Document> {
    const res = await Book.findOne({ slug });
    return res;
  }
}

export default new BookRepository();
