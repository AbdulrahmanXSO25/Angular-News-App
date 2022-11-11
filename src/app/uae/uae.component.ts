import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-uae',
  templateUrl: './uae.component.html',
  styleUrls: ['./uae.component.css']
})
export class UaeComponent implements OnInit {

  public allUAENews:any = [];

  constructor (public _NewsService:NewsService) {

    this._NewsService.getNews("ae").subscribe( (data)=>{

      this.allUAENews = data.articles;

      console.log(this.allUAENews);
    });
   }

  ngOnInit(): void {
  }

}
