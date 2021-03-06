import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seeds1544303473346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // companies
    await queryRunner.query(`
      INSERT INTO public.companies ("name", "domain") VALUES
      ('Name1', 'Domain1'),
      ('Name2', 'Domain2'),
      ('Name3', 'Domain3'),
      ('Name4', 'Domain4'),
      ('Name5', 'Domain5'),
      ('Name6', 'Domain6'),
      ('Name7', 'Domain7'),
      ('Name8', 'Domain8'),
      ('Name9', 'Domain9'),
      ('Name10', 'Domain10');
    `);

    // projects
    await queryRunner.query(`
      INSERT INTO public.projects ("name", "description", "isActive", "companyId") VALUES
      ('Project1', 'description1', true, 1),
      ('Project2', 'description2', true, 1),
      ('Project3', 'description3', true, 2),
      ('Project4', 'description4', true, 2),
      ('Project5', 'description5', true, 3),
      ('Project6', 'description6', true, 3),
      ('Project7', 'description7', true, 4),
      ('Project8', 'description8', true, 4),
      ('Project9', 'description9', true, 5),
      ('Project10', 'description10', true, 5),
      ('Project11', 'description11', false, 6),
      ('Project12', 'description12', false, 6),
      ('Project13', 'description13', false, 7),
      ('Project14', 'description14', false, 7),
      ('Project15', 'description15', false, 8),
      ('Project16', 'description16', false, 8),
      ('Project17', 'description17', false, 9),
      ('Project18', 'description18', false, 9),
      ('Project19', 'description19', false, 10),
      ('Project20', 'description20', false, 10);
    `);

    // users-profiles
    await queryRunner.query(`
      INSERT INTO public.user_profiles ("name") VALUES
      ('User1'),
      ('User2'),
      ('User3'),
      ('User4'),
      ('User5'),
      ('User6'),
      ('User7'),
      ('User8'),
      ('User9'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User1'),
      ('User2');
    `);

    // users
    await queryRunner.query(`
      INSERT INTO public.users ("email", "isActive", "companyId", "profileId") VALUES
      ('1@email.com', true, 1, 1),
      ('2@email.com', true, 1, 2),
      ('3@email.com', true, 1, 3),
      ('4@email.com', true, 1, 4),
      ('5@email.com', true, 1, 5),
      ('6@email.com', true, 1, 6),
      ('7@email.com', false, 1, 7),
      ('8@email.com', false, 1, 8),
      ('9@email.com', false, 1, 9),
      ('10@email.com', true, 1, 10),
      ('11@email.com', true, 2, 11),
      ('12@email.com', true, 2, 12),
      ('13@email.com', true, 2, 13),
      ('14@email.com', true, 2, 14),
      ('15@email.com', true, 2, 15),
      ('16@email.com', true, 2, 16),
      ('17@email.com', false, 2, 17),
      ('18@email.com', false, 2, 18),
      ('19@email.com', false, 2, 19),
      ('20@email.com', false, 2, 20);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
