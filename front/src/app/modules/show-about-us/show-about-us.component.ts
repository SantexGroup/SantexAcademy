import { Component, OnInit } from '@angular/core';
import { AboutUS } from 'src/app/core/interfaces/about-us';
import { AboutUsService } from 'src/app/core/services/about-us.service';

@Component({
  selector: 'app-show-about-us',
  templateUrl: './show-about-us.component.html',
  styleUrls: ['./show-about-us.component.css']
})
export class ShowAboutUsComponent implements OnInit {
  abouts: AboutUS[] = [];
  groupedAbouts: {priority: number, abouts: any[]}[] = [];
  constructor(private aboutusService: AboutUsService) {  }

  ngOnInit() {
    this.aboutusService.getAbout().subscribe((data) => {
      this.abouts = <any>data;
      this.abouts = this.abouts.filter(about => about.active !== false);
    const maxPriority = Math.max(...this.abouts.map(about => about.priority));
    for (let i = 0; i <= maxPriority; i++) {
      this.groupedAbouts.push({ priority: i, abouts: [] });
    }
    this.abouts.forEach(about => {
      this.groupedAbouts[about.priority].abouts.push(about);
    });
    this.groupedAbouts = this.groupedAbouts.filter(abouts => abouts.abouts.length > 0);
  });
  }

  getAbouts() {
    this.aboutusService.getAbout().subscribe(
      (res) => {
        this.abouts = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
