import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-graph-qllist',
  templateUrl: './graph-qllist.component.html',
  styleUrls: ['./graph-qllist.component.scss']
})
export class GraphQLlistComponent implements OnInit {

  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
