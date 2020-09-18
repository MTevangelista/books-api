import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

import Database from '@database/db';
import routes from './routes';

class App {
  public app: express.Application;
  private database: Database;

  public constructor() {
    this.app = express();

    this.middleware();
    this.database = new Database();
    this.database.createConnection();
    this.routes();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use(routes);
  }
}

export default new App().app;
