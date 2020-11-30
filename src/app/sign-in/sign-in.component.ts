import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiInterfaceService } from '../api-interface.service';
import { SignIn } from '../apidetails';
import { UserSignIndetailsService } from '../userapidetails.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName : String = '';
  password : String = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private service:ApiInterfaceService ) { }

  ngOnInit() {
   
  }

  login(){

    console.log("called ")
    this.service.dddd();

   
  }
}
