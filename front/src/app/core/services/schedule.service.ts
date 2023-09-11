import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../interfaces/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl= 'http://localhost:4001/schedule';  
  

  constructor(private httpSchedule: HttpClient) { }

  getSchedule() {
    return this.httpSchedule.get<Schedule>(this.apiUrl)
  };
  
  getScheduleById(id:number){
    return this.httpSchedule.get<Schedule>(this.apiUrl+'/'+id)
  }

  postSchedule(schedule: Schedule){
    return this.httpSchedule.post(this.apiUrl, schedule)
  }

  putSchedule(schedule: Schedule, id:number){
    return this.httpSchedule.put(this.apiUrl+'/'+id, schedule)
  }

  deleteSchedule(id:number){
    return this.httpSchedule.delete(this.apiUrl+'/'+id)
  }
}
