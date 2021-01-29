import 'reflect-metadata';
import 'dotenv/config';
import { Database } from './app/data/database';
import { Server } from './server';

const init = async () => {
  const database = new Database();
  await database.connect();

  const server = new Server();
  server.listen(port => console.log(`> Server running on port ${port}`));
};

init();
