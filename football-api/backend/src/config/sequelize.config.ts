// src/config/sequelize.config.ts
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { PlayerModel } from 'src/modules/players/repositories/sequelize/player.model';

dotenv.config(); // carga el archivo .env si aún no lo hizo

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 3306),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
  models: [PlayerModel],
  autoLoadModels: true,
  synchronize: true,
  logging: false, // set to true for verbose SQL logs
};

export default sequelizeConfig;
