import { Router } from 'express';
import { UserController } from '../controllers';

export default class UserRoutes {
  private userController: UserController;
  private routes: Router;

  constructor() {
    this.userController = new UserController();
    this.routes = Router();
    this.setRoutes();
  }

  public getRoutes() {
    return this.routes;
  }

  private setRoutes() {
    this.routes.get('/api/users', (req, res) =>
      this.userController.getAll(req, res),
    );
  }
}
