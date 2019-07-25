import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { of } from 'rxjs';
import { Rate } from '../../models/rate';

@Component({
  selector: 'app-graph-qllist',
  templateUrl: './graph-qllist.component.html',
  styleUrls: ['./graph-qllist.component.scss']
})
export class GraphQLlistComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 30;

  rates: Rate[];
  loading = true;
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
  `
    });

    this.query.valueChanges.subscribe(result => {
      this.rates = result.data.rates;
      this.loading = result.loading;
    });

  }

}
