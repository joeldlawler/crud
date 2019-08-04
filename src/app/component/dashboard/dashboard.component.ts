import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navitem';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navItems: NavItem[] = [
    {
      displayName: 'All',
      route: '/home'
    },
    {
      displayName: 'Doug',
      route: '/home',
      parameters: { column: 'firstname', term: 'Doug' }
    },
    {
      displayName: 'Partner',
      route: '/home',
      parameters: { column: 'title', term: 'Partner' }
    },
    {
      displayName: 'Associate',
      route: '/home',
      parameters: { column: 'title', term: 'Associate' }
    },
    {
      displayName: 'People In Austin',
      route: '/home',
      parameters: { column: 'office', term: 'Austin' }
    },
  ];

}
