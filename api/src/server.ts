import cors from 'cors';
import express, { Application } from 'express';
import { UserRoutes } from './app/routes';

export class Server {
  private app: Application;
  private readonly PORT = Number(process.env.PORT) || 5000;

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setRoutes() {
    this.app.use(new UserRoutes().getRoutes());
  }

  public listen(callback: (port: number) => void) {
    this.app.listen(this.PORT, () => callback(this.PORT));
  }
}
