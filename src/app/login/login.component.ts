import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { Login } from "../login";
import { RegisterService } from "../register-service";
import { User } from "../user"
// import {Login} from "src/"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  login: Login = new Login();
  maxDate: String;
  message: string;
  errorMessage = "";
  isValid: boolean;
  validatedUser: User = new User();

  constructor(private route: Router, private registerService: RegisterService) { }

  signUp: String
  signIn: String
  container: String

  ngOnInit() {
    this.maxDate = moment().format('DD-MM-YYYY')
  }

  // signUpButton.addEventListener('click', () => {
  // 	container.classList.add("right-panel-active");
  // });

  signUpClick(): void {
    this.signUp = "right-panel-active"
    console.log("signup")
  }

  signInClick(): void {
    this.signUp = ""
    console.log("signIn")
  }


  loginSubmit(): void {
    console.log(this.user)
  }

  signUpSubmit() {
    console.log(JSON.stringify(this.user));
    this.registerService.registerUser(this.user)
      .subscribe(
        msg => {
          this.message = msg;
          console.log(this.message);
        }
      );
  }

  signInSubmit(){
    console.log(JSON.stringify(this.login));
    this.registerService.loginUser(this.login)
    .subscribe(
      msg=>{
        this.isValid=msg;
        if(this.isValid){
          this.registerService.getUser(this.login.email)
          .subscribe(
            user=> {
              this.validatedUser = user;
              sessionStorage.setItem("userDetails",JSON.stringify(this.validatedUser));
              // this.saveData(sessionStorage)
              console.log(sessionStorage.getItem('userDetails'))
              console.log(JSON.stringify(this.validatedUser));
              this.route.navigate(['/homeLink']);
            }
          );

        }
      }
      );    
  }

  // saveData() {
  //   sessionStorage.setItem("name", this.validatedUser.firstName);
  //   console.log(sessionStorage.getItem("name"));
  // }

}
