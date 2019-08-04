import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { HttpClient, HttpHeaders  } from  '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class DataService {

  headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(url:string) : any{
    return this.httpClient.get(url).pipe(catchError(this.handleError)); 
  }

  getSingle(url:string){
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  }

  create(url:string, resource:any) {
    return this.httpClient
      .post(url, JSON.stringify(resource), this.headers).pipe(catchError(this.handleError)); 
  }

  update(url:string, id:number, resource:any) {
    return this.httpClient
      .put(url + id, JSON.stringify(resource), this.headers).pipe(catchError(this.handleError));
  }

  delete(url:string, id:number) {
    return this.httpClient
      .delete(url + id);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404) return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
