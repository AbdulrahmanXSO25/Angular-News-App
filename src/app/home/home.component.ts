import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allEgyNews = [];

  constructor(public _NewsService:NewsService) {
    
    this._NewsService.getNews().subscribe( (data)=>{

      this.allEgyNews == data.articles;

      console.log(data.articles);
    } );
   }
  
  ngOnInit(): void {
  }

}
