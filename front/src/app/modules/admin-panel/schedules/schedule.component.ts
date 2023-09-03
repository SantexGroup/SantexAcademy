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

  deleteSchedule(id: number) {
    this.scheduleService.deleteSchedule(id).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

}
