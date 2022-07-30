import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;
  username : String;
  optionLogin: String = 'Login';
  optionLogout : String;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails"));
  }

  ngDoCheck() {
    if(this.user.firstName == null || this.user.firstName.length == 0){
      this.optionLogin = "Login";
      this.optionLogout="";
    }else{
      this.username="Hi! " + this.user.firstName;
      this.optionLogin = "";
      this.optionLogout="Logout";
    }
  }

}
