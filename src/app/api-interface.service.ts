import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SignInDataResponse } from './apidetails';
@Injectable({
  providedIn: 'root'
})
export class ApiInterfaceService {
  signuplist: string = `https://baluliveclasses.000webhostapp.com/apiAuth/index.php/user/create`

  signInlink: string = `https://baluliveclasses.000webhostapp.com/apiAuth/index.php/userAuth/login`

  constructor(private http: HttpClient) { }

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

login3(): Observable<SignInDataResponse> {

  return this.http.get<any>(this.signuplist)
    .pipe(
      map((response: any) => {

        console.log(response);

        return response

      })
    );

}


login2(): Observable<any> {

  // "username": "balakrishna.tn@gmail.com",
  //   "password": "gpcet@123"

  const params = new HttpParams().set("username", "balakrishna.tn@gmail.com")
    .set("password", "gpcet@123");

  const httpOptions = {
    headers: new HttpHeaders({
      'Client-Service': 'frontend-client',
    'Auth-Key': 'simplerestapi',
    'Content-Type': 'application/json'
    }),
    params: params
  };

  this.http
  .post<any>(this.signInlink, null, httpOptions)
  .subscribe(
    data => {
      console.log("PUT Request is successful.");
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    }
  );
return null;

  }

  dddd() : Observable<any>{
    // https://jsonplaceholder.typicode.com/todos/1
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      data => {
        console.log(data);
        return data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
        console.log(err)
      }
    );
  
    return null;
  }

login(): Observable<any> {
  console.log("Api interface")

  const httpOptions = {
    headers: new HttpHeaders({
      'Client-Service': 'frontend-client',
    'Auth-Key': 'simplerestapi',
    'Content-Type': 'application/json'
    }),
    
  };

  let head =  new HttpHeaders();
  head.append('Client-Service', 'frontend-client');
  head.append('Auth-Key', 'simplerestapi');
  head.append('Content-Type', 'application/json');

  const body = {
    "username": "balakrishna.tn@gmail.com",
    "password": "gpcet@123"
  };

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  this.http.post<any>(this.signInlink, body, {headers : head}).subscribe(
    data => {
      console.log("PUT Request is successful.");
      return data;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
      console.log(err)
    }
  );

  return null;
}
}

