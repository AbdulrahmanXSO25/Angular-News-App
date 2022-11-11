import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = "Abdulrahman";

  img = "assets/features-03.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
