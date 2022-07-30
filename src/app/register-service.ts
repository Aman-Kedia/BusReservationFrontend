import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Login } from './login';
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<string> {
    return this.httpClient
      .post("http://localhost:9090/user/signup", user, { responseType: 'text' });
  }

  loginUser(login: Login): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:9090/user/login", login);
  }

  getUser(email: string): Observable<User> {
    return this.httpClient.get<User>("http://localhost:9090/admin/finduser/" + email);
  }

  getOrigin(){
    return this.httpClient.get("http://localhost:9090/admin/viewallorigins");
  }

  getDestination(){
    return this.httpClient.get("http://localhost:9090/admin/viewalldestinations");
  }
}
