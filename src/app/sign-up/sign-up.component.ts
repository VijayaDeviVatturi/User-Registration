import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  lastName : String = '';
  password : String = '';
  firstName : String = '';
  Gender: String = '';
  Email: String = '';
  phoneNumber:number;
  Photo: String = '';
  // Qualifaction:String = '';
  Occuaption:String = '';
  dateofbirth:String;
  Address1:String = '';
  Address2:String = '';
  city:String = '';
  // state:String = '';
  Country:String = '';
  PinCode:number;
  Status:String = '';
  Privilage:String = '';
  qualifactions=['Bsc','B.tech']
  Qualifaction={qname:this.qualifactions[0]}
  
  states = ['A.P', 'T.S', 'T.M'];

  user = {state: this.states[0]};
  countryes = ['India','U.S','U.K']
  countrynames = {country:this.countryes[0]}
  pipe = new DatePipe('en-US');
  now = Date.now();
    
  mySimpleFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
  myShortFormat = this.pipe.transform(this.now, 'short');
  constructor() { }

  ngOnInit() {
  }

}
