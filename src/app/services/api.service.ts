import { Observable, map, catchError, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../models/api.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  public loginSubject = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  postService(paramsReq: Api.Params): Observable<T> {
    const { url, params, body } = paramsReq;
    const options = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: params,
      },
    };
    return this.http.post<T>(url, body, options).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  getService(paramsReq: Api.Params): Observable<T> {
    const { url, params } = paramsReq;
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: params,
      },
    };
    return this.http.get<T>(url, options).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }
  isAutenticated(): boolean {
    if (sessionStorage.getItem('LoginFlag')) {
      this.loginSubject.next(false);
      return true;
    }
    this.loginSubject.next(true);
    return false;
  }
  signOut(): void {
    sessionStorage.removeItem('LoginFlag');
    sessionStorage.removeItem('request_Token');
    this.loginSubject.next(true);
  }
  get loginAction$(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
