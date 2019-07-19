import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAll('https://wemp.azurewebsites.net/api/wapi').subscribe(employees => {
      this.employees = employees;
    }); 
  }

}
