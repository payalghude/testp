import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get(environment.url + "api/blogpost/list")
  }
  login(data){
    return this.http.post("http://localhost:3000/api/login",data)
  }
}
