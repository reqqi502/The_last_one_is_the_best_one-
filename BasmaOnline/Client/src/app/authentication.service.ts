import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

host2:string="http://localhost:8080";
jwt:string;
email:string;
roles:Array<string>;

  constructor(private http:HttpClient) {}

    login(data: {email: string, password: string}){
      return this.http.post(this.host2+"/auth",data) 

    }
}

