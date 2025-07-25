import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerDto } from './dto/player.dto';

@Controller('api/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getPlayerById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PlayerDto | undefined> {
    const player = await this.playersService.getPlayerById(id);
    console.log(`Fetching player  ${player}`);
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found.`);
    }

    return new PlayerDto(player);
  }
}
