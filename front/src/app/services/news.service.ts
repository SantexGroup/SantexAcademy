import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news = [
    {
      id: 1,
      title: 'Curso de electricidad basico',
      autor:'Incubadora del NOC',
      description: 'Aprenderas las conexiones basicas de un circuito electrico',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02a6AUMLB9bzh5LrS3jQ95Epr6FmcMWBfwg5Kr8zMLF4e41FPVudaRAR9FYjJQYkUvl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/385253718_807981141333213_5250940909325400472_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=36MIzAyC4fkAX_2yMrX&_nc_ht=scontent.fcor10-4.fna&oh=00_AfBCJrlrOLlkuVU_Mn-4-fcpU8ed-ep_g_uWHMlk7uh9qg&oe=6528DA5C"
    },
    {
      id: 2,
      title: 'Curso de bartender',
      autor:'Incubadora del NOC',
      description: 'Aprenderas a preparar las mas ricas bebidas ',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02VHTesMjQFFNgnifz4wSKv9n3TYPY2dzuUZCg7SW3TJRz6SGd9XAdehnFpvsexULSl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/386730726_807976764666984_4852883401303306437_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=oFSYoXonECAAX-wy2g3&_nc_ht=scontent.fcor10-3.fna&oh=00_AfCPSZ5ElvLQaX053ZMCD7QRnmIiUPleXLi-D_wRwGHN8w&oe=65297E46"
    },
  ];

  constructor() { }

  getNews(): any[] {
    return this.news;
  }

  getNewsById(id: number) {
    return this.news.find(news => news.id === id);
  }
}
