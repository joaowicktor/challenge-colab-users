import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import User from '../entities/User';

export class CreateAndSeedTableUsers1611706842393
  implements MigrationInterface {
  name = 'CreateAndSeedTableUsers1611706842393';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`,
    );
    await this.seed();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }

  private async seed() {
    await getRepository(User).save([
      { id: uuidv4(), name: 'Leanne Graham', email: 'sincere@april.biz' },
      { id: uuidv4(), name: 'Ervin Howell', email: 'shanna@melissa.tv' },
      { id: uuidv4(), name: 'Clementine Bauch', email: 'nathan@yesenia.net' },
      {
        id: uuidv4(),
        name: 'Patricia Lebsack',
        email: 'julianne.oconner@kory.org',
      },
      {
        id: uuidv4(),
        name: 'Chelsey Dietrich',
        email: 'lucio_hettinger@annie.ca',
      },
      {
        id: uuidv4(),
        name: 'Mrs. Dennis Schulist',
        email: 'karley_dach@jasper.info',
      },
      {
        id: uuidv4(),
        name: 'Kurtis Weissnat',
        email: 'telly.hoeger@billy.biz',
      },
      {
        id: uuidv4(),
        name: 'Nicholas Runolfsdottir V',
        email: 'sherwood@rosamond.me',
      },
      {
        id: uuidv4(),
        name: 'Glenna Reichert',
        email: 'chaim_mcdermott@dana.io',
      },
      {
        id: uuidv4(),
        name: 'Clementina DuBuque',
        email: 'rey.padberg@karina.biz',
      },
    ]);
  }
}
