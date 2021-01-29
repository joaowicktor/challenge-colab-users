import { Request, Response } from 'express';

import User from '../data/entities/User';
import { UserRepository } from '../data/repositories';
import HttpResponse from '../helpers/HttpResponse';

export default class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(User);
  }

  public async getAll(req: Request, res: Response) {
    try {
      const users = await this.userRepository.findAll();
      return res.send(new HttpResponse('success', users));
    } catch (err) {
      return res.status(400).send(new HttpResponse('error', null, err));
    }
  }
}
