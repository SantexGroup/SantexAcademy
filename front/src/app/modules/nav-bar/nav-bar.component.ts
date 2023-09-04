import { Component, OnInit, Input} from '@angular/core';
import { GetURLdataService } from 'src/app/core/services/toolServices/get-urldata.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(
    public dataUrl: GetURLdataService,
    public views: NavBarService
    ) { }

  /* Se trae desde app.component */
  
  ngOnInit(): void { 

  }
}
