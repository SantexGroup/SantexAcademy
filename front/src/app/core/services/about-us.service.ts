import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUS } from '../interfaces/about-us';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private apiUrl= 'http://localhost:4001/api/aboutus';  
  

  constructor(private httpAboutUS: HttpClient) { }

  getAbout() {
    return this.httpAboutUS.get<AboutUS>(this.apiUrl)
  };
  
  getAboutById(id:number){
    return this.httpAboutUS.get<AboutUS>(this.apiUrl+'/'+id)
  }

  postAbout(aboutUS: AboutUS){
    return this.httpAboutUS.post(this.apiUrl, aboutUS)
  }

  putAbout(aboutUS: AboutUS, id:number){
    return this.httpAboutUS.put(this.apiUrl+'/'+id, aboutUS)
  }

  deleteAbout(id:number){
    return this.httpAboutUS.delete(this.apiUrl+'/'+id)
  }
}
