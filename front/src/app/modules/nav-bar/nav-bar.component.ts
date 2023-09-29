import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title: string = ""

  constructor(
    public views: NavBarService,
    public userData: UserDataService,
    private changeDetector: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.views.title.subscribe((data) => {
      this.title = data;
      this.changeDetector.detectChanges();
    });    
  }

  logout() {
    localStorage.clear();
  }

}
