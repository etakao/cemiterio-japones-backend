import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { parse } from 'pg-connection-string';

const dbUrl = process.env.DATABASE_URL ? parse(process.env.DATABASE_URL) : null;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: dbUrl?.host || process.env.DB_HOST,
  port: Number(dbUrl?.port || process.env.DB_PORT),
  username: dbUrl?.user || process.env.DB_USERNAME,
  password: dbUrl?.password || process.env.DB_PASSWORD,
  database: dbUrl?.database || process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
