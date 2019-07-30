import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees;
  searchText;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    of(this.dataService.getAll('https://wemp.azurewebsites.net/api/wapi').subscribe(employees => {
      this.employees = employees;
    })); 
  }

  trackByFn(index, item) {
    return item.id;
  }

}
