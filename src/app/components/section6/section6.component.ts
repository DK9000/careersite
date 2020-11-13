import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss'],
})
export class Section6Component implements OnInit {

  //Array for employees. 
  //Array is used for generating HTML markup. This array Contains objects, with names and source location for their pictures.
  items = [
    { name: 'Kiranan', src: 'assets/pictures/frontpage/employees/kiranan.jpg' },
    { name: 'Erik', src: 'assets/pictures/frontpage/employees/erik.jpg' },
    { name: 'Anders', src: 'assets/pictures/frontpage/employees/anders.jpg' },
    { name: 'Lasse', src: 'assets/pictures/frontpage/employees/lasse.jpg' },
    { name: 'Simone', src: 'assets/pictures/frontpage/employees/simone.jpg' },
    { name: 'Magnus', src: 'assets/pictures/frontpage/employees/magnus.jpg' },
    {
      name: 'Rasmus P',
      src: 'assets/pictures/frontpage/employees/rasmus_p.jpg',
    },
    {
      name: 'Christian',
      src: 'assets/pictures/frontpage/employees/christian.jpg',
    },
    { name: 'Stefan', src: 'assets/pictures/frontpage/employees/stefan.jpg' },
    {
      name: 'Rasmus M',
      src: 'assets/pictures/frontpage/employees/rasmus_m.jpg',
    },
    { name: 'Tor', src: 'assets/pictures/frontpage/employees/tor.jpg' },
    { name: 'Thomas', src: 'assets/pictures/frontpage/employees/thomas.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
