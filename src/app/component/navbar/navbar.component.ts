import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navitem';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  otherItems: NavItem[] = [
    {
      displayName: 'Bilingual',
      route: '/bilingual'
    },
    {
      displayName: 'College',
      route: '/colleges'
    },
    {
      displayName: 'Law License',
      route: '/lawlicense'
    },
    {
      displayName: 'Notary',
      route: '/notary'
    },
    {
      displayName: 'Practice Group Leader',
      route: '/pgl'
    },
    {
      displayName: 'User Names',
      route: '/raw'
    }
  ];
}
