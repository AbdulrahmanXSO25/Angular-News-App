import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient:HttpClient) { }

  getNews(reigon:string):Observable<any>
  {
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=${reigon}&apiKey=2dc6d591e5d9481f97af57102f345024`);
  }
}
