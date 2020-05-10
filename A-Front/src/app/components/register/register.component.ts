import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../../service/auth.service'



@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:String;
  name:String;
  email:String;
  password:String;

  constructor(

    private authService:AuthService

  ) { }

  ngOnInit() {
  }

  registerData() {
   
    const user = {
      username:this.username,
      name:this.name,
      email:this.email,
      password:this.password
    };

    this.authService.registerUser(user)

  }
  
}
