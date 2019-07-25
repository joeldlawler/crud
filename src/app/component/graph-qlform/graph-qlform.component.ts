import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

// Import models
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-graph-qlform',
  templateUrl: './graph-qlform.component.html',
  styleUrls: ['./graph-qlform.component.scss']
})
export class GraphQLformComponent {



  model = new Contact(1, 'Stosh Phosburger', 'sp@blllloooob.law', 'I am stosh of the stoshes...');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private apollo: Apollo
    , public el: ElementRef
    , public renderer: Renderer
    , public route: ActivatedRoute
    , public router: Router
    , public formBuilder: FormBuilder
  ) { }

  newContact() {
    this.model = new Contact(42, '', '', '');
  }

}
