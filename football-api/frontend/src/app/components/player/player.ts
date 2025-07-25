// src/app/components/player/player.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService, Player } from '../../services/player/player';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  providers: [PlayerService],
  templateUrl: './player.html',
  styleUrls: ['./player.css'],
})
export class PlayerComponent implements OnInit {
  player?: Player;
  errorMessage = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    console.log('PlayerComponent initialized');
    this.playerService.getPlayer(20).subscribe({
      next: (data) => (this.player = data),
      error: (err) => (this.errorMessage = 'Jugador no encontrado'),
    });
  }
}
