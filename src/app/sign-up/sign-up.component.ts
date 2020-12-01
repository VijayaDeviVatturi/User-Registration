import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DatePipe , Location} from '@angular/common'
import { SignUp } from '../apidetails';
import { ApiInterfaceService } from '../api-interface.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  
  password : String = '';
  
  User: String = '';
  name : String = '';
  
  signUpData:SignUp
  showLoading : boolean;
  constructor(private service: ApiInterfaceService, private _location: Location) { }

  ngOnInit() {
  }
  regestration() {
    this.showLoading =true;
    const body = {
      "name" : this.name,
      "email": this.User,
      "password":this.password
    }

    this.service.regestration(body).subscribe(res => {
      console.log(res)  
      this.signUpData = res
      if (res.success) {
        alert("Regestration successfull");
       this._location.back();
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
