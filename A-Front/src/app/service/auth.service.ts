import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;

  constructor(
    private http:Http

  ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    this.http.post("http://localhost:3000/user/register",user,{headers:headers})

  }

}
