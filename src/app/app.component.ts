import { Component, OnInit } from '@angular/core';
declare const animation: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  //start the animation toggle
  ngOnInit(): void {
    animation()
  }
  

}
