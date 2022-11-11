import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isHere:boolean = false;

  names:string[] = ["ahmed","mohammed","ali","sayed"]

  constructor() { }

  ngOnInit(): void {
  }

}
