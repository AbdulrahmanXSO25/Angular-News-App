import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-egy',
  templateUrl: './egy.component.html',
  styleUrls: ['./egy.component.css']
})
export class EgyComponent implements OnInit {

  public allEgyNews:any = [];

  constructor (public _NewsService:NewsService) {

    this._NewsService.getNews("eg").subscribe( (data)=>{

      this.allEgyNews = data.articles;

      console.log(this.allEgyNews);
    });
   }

  ngOnInit(): void {
  }

}
