import path from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'sqlite',
  database: path.join(__dirname, '..', '..', '..', 'db.sqlite'),
  logging: false,
  entities: [path.join(__dirname, '..', 'data', 'entities', '*.{ts,js}')],
  migrations: [path.join(__dirname, '..', 'data', 'migrations', '*.{ts,js}')],
  cli: {
    migrationsDir: 'src/app/data/migrations',
  },
};

export default config;
