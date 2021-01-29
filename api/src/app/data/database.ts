import { Connection, createConnection } from 'typeorm';

import config from '../config/typeorm';

export class Database {
  private connection: Connection;

  public getConnection() {
    return this.connection;
  }

  public async connect() {
    try {
      this.connection = await createConnection(config);
      console.log('> Database connected successfully');
    } catch (err) {
      console.log('> Error when trying to connect to database:', err);
    }
  }
}
