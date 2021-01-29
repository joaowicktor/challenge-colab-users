export default interface IBaseRepository<T> {
  create(entity: T): Promise<boolean>;
  update(id: string, entity: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  findOne(id: string): Promise<T | undefined>;
  findAll(): Promise<T[]>;
}
