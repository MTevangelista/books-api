import mongoose from 'mongoose';

const { Schema } = mongoose;

const BookSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  theme: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  Publisher: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: Number,
    required: true,
    trim: true,
  },
  totalPages: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const book = mongoose.model('book', BookSchema);

export default book;
