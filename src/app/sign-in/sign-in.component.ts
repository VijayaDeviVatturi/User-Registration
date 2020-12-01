import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiInterfaceService } from '../api-interface.service';
import { SignIn } from '../apidetails';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName: String = '';
  password: String = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  signInData: SignIn
  showLoading : boolean;

  constructor(private service: ApiInterfaceService) { }

  ngOnInit() {




  }

  login() {
    this.showLoading =true;
    const body = {
      "email": this.userName,
      "password": this.password
    }

    this.service.login(body).subscribe(res => {
      console.log(res)
      this.signInData = res

      if (res.success) {
        alert("Login successfull");
        
      } else {
        alert("Error occured");
      }
      this.showLoading =false;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
       
        alert(err.error.error);
        this.showLoading =false;
      }
    );

  }
}

