import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/core/interfaces/schedule';
import { ScheduleService } from 'src/app/core/services/schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: Schedule[] = [];
  id:number=0;
  constructor(private scheduleService: ScheduleService, private router: Router) { 
    this.getCategories();
  }

  ngOnInit(): void {
  }
  getCategories() {
    this.scheduleService.getSchedule().subscribe(
      (res) => {
        this.schedules = <any>res;
      },
      (err) => console.log(err)
    );
  }

  deleteSchedule() {
    this.scheduleService.deleteSchedule(this.id).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
  selectId(id: number){
    this.id = id
  }
}
