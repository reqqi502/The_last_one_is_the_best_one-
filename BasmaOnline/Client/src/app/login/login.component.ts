import { Component, OnInit } from '@angular/core';
import { config, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../token.service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSrvice:AuthenticationService , private tokenS:TokenService) { }

  ngOnInit(): void {
    }

    onLogin(data){
     if(this.onLogin){ alert("user is logedIn !!");
   this.authSrvice.login(data).subscribe(resp => this.handleResponse(resp))
    }else(this.onLogin == null);
      alert("not logedIn !!")

}

  handleResponse(resp){
    this.tokenS.handle(resp)
  }
  
}


