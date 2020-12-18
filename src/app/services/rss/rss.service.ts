import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RssService {
  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.apis.url;
  }

  log(message: string) {
    console.log(message);
  }

  handleError<T>(operation = 'operation', request?: T) {
    return (error: any) => {
      if (error.error instanceof Error) {
        return throwError(error);
      }
      return throwError(error);
    };
  }

  getHolidays(): Observable<any> {
    const url =  `/api/holidays`;
    return this.http.get(url).pipe(
      tap(data => this.log(url)),
      catchError(this.handleError(url))
    );
  }

  getCameraLens(): Observable<any> {
    const url = '/api/lens';
    return this.http.get<any>(url).pipe(
      map((data: any) => data), // <- USED TO MAP THE RESPONSE TO AN SPECIFIC CLASS, IN THIS EXAMPLE I'M JUST RETURNING THE SAME TYPE
      tap(data => this.log(url)),
      catchError(this.handleError(url))
    );
  }


}
