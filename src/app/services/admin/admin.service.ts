import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.apis.url;
  }

  log(message: string) {

  }

  handleError<T>(operation = 'operation', request?: T) {
    return (error: any) => {
      if (error.error instanceof Error) {
        return throwError(error);
      }
      return throwError(error);
    };
  }
}
