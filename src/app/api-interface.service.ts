import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SignIn, SignUp, } from './apidetails';
@Injectable({
  providedIn: 'root'
})
export class ApiInterfaceService {
  signIn = `https://api.jsonapi.co/rest/v1/user/login`
   signUp = 'https://api.jsonapi.co/rest/v1/user/register';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  login(body): Observable<SignIn> {
    console.log(body)
    
    return this.http.post<SignIn>(this.signIn, body, this.httpOptions)

  }
  regestration(body):Observable<SignUp>{
    return this.http.post<SignUp>(this.signUp, body, this.httpOptions)
  }
}

