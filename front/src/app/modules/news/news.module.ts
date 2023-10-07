import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [
    NewsComponent,    
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    
  ]
})
export class NewsModule { }
