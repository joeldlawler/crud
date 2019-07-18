import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        this.handleError;
        return of(result as T);
      })
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        this.handleError;
        return of(result as T);
      })
    );
  }

  update(resource) {
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true })).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        this.handleError;
        return of(result as T);
      })
    );
  }

  delete(id) {

    return this.http.delete(this.url + "/" + id).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        this.handleError;
        return of(result as T);
      })
    );

  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404) return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
