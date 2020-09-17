import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

import Database from './database/db';

class App {
  public app: express.Application;
  private database: Database;

  public constructor() {
    this.app = express();

    this.middlewares();
    this.database = new Database();
    this.database.createConnection();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.route('/').get((req, res) => res.status(200).json({ message: 'Hello World' }));
  }
}

export default new App().app;
