import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  public express: express.Application;

  private version = '/api/v1';

  public constructor() {
    this.express = express();

    this.init();
  }

  public init(): void {
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/smartschools', {
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    routes.forEach((router) => {
      this.express.use(this.version, router);
    });
  }
}

export default new App().express;
