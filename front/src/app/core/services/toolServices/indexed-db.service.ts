import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService extends Dexie{

  constructor() {
    
    super('localBD');

    this.version(1).stores({
      countries: '++id, country',
      gender: '++id, gender',
    })
  }
}
