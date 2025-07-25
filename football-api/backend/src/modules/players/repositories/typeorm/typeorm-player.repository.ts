import { Repository } from 'typeorm';
import { Player } from '../../entities/player.entity';
import { IPlayerRepository } from '../../interfaces/player-repository.interface';
import { PlayerDto } from './player.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmPlayerRepository implements IPlayerRepository {
  constructor(
    @InjectRepository(PlayerDto)
    private readonly playerRepository: Repository<PlayerDto>,
  ) {}

  async findAll(): Promise<Player[]> {
    const playerList = (await this.playerRepository.find()).map((x) =>
      this.mapToEntity(x),
    );

    return playerList;
  }

  async findOneById(id: number): Promise<Player | undefined> {
    const dto = await this.playerRepository.findOne({ where: { id } });
    if (dto === null) {
      return undefined;
    }

    const entity = this.mapToEntity(dto);

    return entity;
  }

  private mapToEntity(playerDto: PlayerDto): Player {
    const player = new Player();
    player.id = playerDto.id;
    player.name = playerDto.longName;
    player.club = playerDto.clubName || 'Unknown Club';
    player.position = playerDto.playerPositions.split(',')[0].trim();
    player.nationality = playerDto.nationalityName || 'Unknown Nationality';
    player.rating = playerDto.overall;
    player.speed = playerDto.pace ?? 0; // Using nullish coalescing operator (??) for numeric defaults
    player.shooting = playerDto.shooting ?? 0;
    player.dribbling = playerDto.dribbling ?? 0;
    player.passing = playerDto.passing ?? 0;

    return player;
  }
}
