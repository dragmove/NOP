import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysqldnlsxj!$9',
  database: 'nop_app',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  // FIXME: Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  synchronize: true,
};
