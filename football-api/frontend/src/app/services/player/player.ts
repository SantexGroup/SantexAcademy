// src/app/services/player.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  rating: number;
  speed: number;
  shooting: number;
  dribbling: number;
  passing: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private baseUrl = 'http://localhost:3000/api/players';

  constructor(private http: HttpClient) {}

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/${id}`);
  }
}
