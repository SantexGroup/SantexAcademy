import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { SequelizePlayerRepository } from './repositories/sequelize/sequelize-player.repository';
import { PlayerModel } from './repositories/sequelize/player.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([PlayerModel])],
  controllers: [PlayersController],
  providers: [
    PlayersService,
    {
      provide: 'IPlayerRepository',
      useClass: SequelizePlayerRepository,
    },
  ],
})
export class PlayersModule {}
