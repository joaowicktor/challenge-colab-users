import { EntityTarget, getConnection, Repository } from 'typeorm';
import { IBaseRepository } from '../interfaces';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  private readonly repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = getConnection().manager.getRepository<T>(entity);
  }

  async create(entity: T): Promise<boolean> {
    try {
      const insertResult = await this.repository.insert(entity);
      return !!insertResult.identifiers;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async update(id: string, entity: T): Promise<boolean> {
    try {
      const updateResult = await this.repository.update(id, entity);
      return !!updateResult.affected;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const deleteResult = await this.repository.delete(id);
      return !!deleteResult.affected;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async findOne(id: string): Promise<T | undefined> {
    return this.repository.findOne(id);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }
}
