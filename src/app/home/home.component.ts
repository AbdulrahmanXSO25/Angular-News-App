import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allEgyNews:any = [];
  public allUAENews:any = [];

  constructor (public _NewsService:NewsService) {

    this._NewsService.getNews("eg").subscribe( (data)=>{

      this.allEgyNews = data.articles;

      console.log(this.allEgyNews);
    });

    this._NewsService.getNews("ae").subscribe( (data)=>{

      this.allUAENews = data.articles;

      console.log(this.allUAENews);
    });
   }

  ngOnInit(): void {
  }

}
