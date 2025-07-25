import { Player } from '../../entities/player.entity';
import { IPlayerRepository } from '../../interfaces/player-repository.interface';

export class InMemoryPlayerRepository implements IPlayerRepository {
  private players: Player[] = [];

  async findAll(): Promise<Player[]> {
    return Promise.resolve([...this.players]);
  }

  async findOneById(id: number): Promise<Player | undefined> {
    return Promise.resolve(this.players.find((p) => p.id === id));
  }
}
