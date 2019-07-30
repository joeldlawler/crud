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

  newConact: boolean = true;

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

  ngOnInit() {
      // Get The Parameter For Selected Map
      this.route.queryParams.subscribe((params) => {
        if (params['id']) {
          let id = Number(params['id']);
          this.newConact = false;
        } 
      });
  }


  newContact() {
    this.model = new Contact(42, '', '', '');
  }

  /* Create Update Delete */
  // createSpot(spotForm): void {

  //   let id = this.spotForm.value.id;

  //   if (id === null || id === '') {

  //     let _spot = new Spot(0, this.mapid, this.spotForm.value.typeid, "", this.spotForm.value.name, "", "", "", this.spotForm.value.login, 760, 840, true);

  //     // console.log(_spot);

  //     this.apollo
  //       .mutate({
  //         mutation: gql`
  //             mutation spotCreate {
  //               spotCreate(mapid:${_spot.mapid}, typeid:${_spot.typeid}, name:"${_spot.name}", login:"${_spot.login}" , x:"${_spot.x}", y:"${_spot.y}") {
  //                 id
  //                 message
  //               }
  //             }
  //             `
  //       })
  //       .subscribe(
  //         ({ data }) => {
  //           this.spotForm.reset({ typeid: '1', login: 'n/a' });
  //           _spot.id = data.spotCreate[0].id;
  //           this.spotview.unshift(_spot);
  //           this.spotdisplay = this.spotview;
  //         },
  //         error => {
  //           console.log("there was an error sending the query", error);
  //         }
  //       );
  //   } else {

  //     let _spot = new Spot(this.spotForm.value.id, this.mapid, this.spotForm.value.typeid, "", this.spotForm.value.name, "", "", "", this.spotForm.value.login, this.spotForm.value.x, this.spotForm.value.y, true);
  //     this.editSpot(_spot);

  //   }

  // }

  // editSpot(_spot: Spot): void {
  //   this.apollo
  //     .mutate({
  //       mutation: gql`
  //       mutation spotEdit {
  //         spotEdit(id:${_spot.id}, mapid:${_spot.mapid}, typeid:${_spot.typeid}, name:"${_spot.name}", login:"${_spot.login}" , x:"${_spot.x}", y:"${_spot.y}") {
  //           id
  //           message
  //       }
  //     }
  //   `
  //     })
  //     .subscribe(
  //       ({ data }) => {

  //         // delete old from list
  //         this.removeSpot(_spot.id);
  //         // add edited spot
  //         this.spotview.unshift(_spot);
  //         this.spotdisplay = this.spotview;
  //         this.spotForm.reset({ typeid: "1", login: 'n/a' });
  //       },
  //       error => {
  //         console.log("there was an error sending the query", error);
  //       }
  //     );
  // }

  // deleteSpot(_spot: Spot): void {

  //   this.apollo
  //     .mutate({
  //       mutation: gql`
  //       mutation spotDelete {
  //         spotDelete(
  //         id:${_spot.id}
  //         ){
  //           message
  //         }
  //       }
  //       `
  //     })
  //     .subscribe(
  //       ({ data }) => {
  //         let index = this.spotview.findIndex(x => x.id === _spot.id);
  //         this.spotview.splice(index, 1);
  //         this.spotdisplay = this.spotview;
  //       },
  //       error => {
  //         console.log("there was an error sending the query", error);
  //       }
  //     );

  // }

}
