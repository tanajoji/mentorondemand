import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
  private _router: Router) { }


logoutUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('mentormail')
  localStorage.removeItem('usermail')
  this._router.navigate(['/'])
}
getToken() {
  return localStorage.getItem('token')
}

loggedIn() {
  return !!localStorage.getItem('token') 
  //console.log(!!localStorage.getItem('token'))
}
adminCheck() {
  return !!localStorage.getItem('email')
}
// public saveUser(regData){
//   console.log(regData);
//   return this.http
//   .post("https://localhost:44335/api/account/register",regData)
//   .pipe(map(data1 => data1 = JSON.parse(JSON.stringify(data1))));
// }

}