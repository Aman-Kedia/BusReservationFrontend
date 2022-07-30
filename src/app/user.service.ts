import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Updateuser } from './updateuser';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  //private httpClient= new HttpClient();
  val:any;
  constructor(private httpClient:HttpClient) { }
  updateProfile(user:User):Observable<Updateuser>{
    return this.httpClient.put<Updateuser>("http://localhost:9090/user/updateuser",user);
  }
 
}
