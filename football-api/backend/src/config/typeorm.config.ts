// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PlayerDto } from 'src/modules/players/repositories/typeorm/player.dto';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost', // Si NestJS corre fuera de Docker, usa 'localhost' ; Si NestJS corre dentro de Docker Compose, usa 'mysql_db' (el nombre del servicio)
  port: 3306,
  username: 'nestjs_user',
  password: 'nestjs_password',
  database: 'nestjs_database',
  entities: [PlayerDto],
  synchronize: true,
};

export default typeOrmConfig;
