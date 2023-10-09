import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUS } from 'src/app/core/interfaces/about-us';
import { AboutUsService } from 'src/app/core/services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  abouts: AboutUS[] = [];
  id : number= 0;
  constructor(private aboutusService: AboutUsService, private router: Router) {
    this.getAbouts();
  }

  ngOnInit(): void {}
  getAbouts() {
    this.aboutusService.getAbout().subscribe(
      (res) => {
        this.abouts = <any>res;
      },
      (err) => console.log(err)
    );
  }
  deleteAbout() {
    this.aboutusService.deleteAbout(this.id).subscribe(
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
