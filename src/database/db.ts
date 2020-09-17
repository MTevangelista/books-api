import mongoose from 'mongoose';

require('dotenv').config();

class Database {
  private dbUrl = process.env.MONGO_URL
  private dbConnection: mongoose.Connection;

  constructor() {}

  public createConnection(): void {
    mongoose.connect(this.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    this.logger();
  }

  private logger(): void {
    this.dbConnection = mongoose.connection;
    this.dbConnection.on('connected', () => console.log('MongoDB connected'));
    this.dbConnection.on('error', (error) => console.error.bind(console, `Connection error: ${error}`));
  }
}

export default Database;
