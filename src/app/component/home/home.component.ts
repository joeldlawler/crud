import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees;
  filteredEmployees;
  private filterKeys;
  searchText: string = "";
  dataFilter: any;

  constructor(
    private dataService: DataService,
    public route: ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.dataService.getAll('https://wemp.azurewebsites.net/api/wapi').subscribe(employees => {
      this.employees = employees;

      this.route.queryParams.subscribe((params) => {

        let filters = {};
  
        if (params['column'] && params['term']) {
          let column = params['column'];
          let term = params['term'];
          filters[column] = term;
          this.filteredEmployees = this.filterData(employees, filters, true);
        } else {
          this.filteredEmployees = employees;
        }
      });
      
      
    });
  }

  filterData(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter || !Object.keys(filter).some(x => filter[x] !== void 0)) {
      return items;
    }

    if (!Array.isArray(items)) {
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        return items.filter(item =>
          filterKeys.reduce((x, keyName) =>
            (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }


  trackByFn(index, item) {
    return item.id;
  }

}
