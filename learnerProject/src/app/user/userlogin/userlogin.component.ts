import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email_id;
  pass_word;
  error_message = ""

  constructor(private http: HttpClient, private _router : Router) { }

  ngOnInit() {
  }

  submit_form_data(loginform){
    // console.log("email_id : " + this.email_id);
    // console.log("pass_word : " + this.pass_word);

    // var body = "email_id=" + this.email_id
    //     + "&pass_word=" + this.pass_word;
  
    
    

let headers = new HttpHeaders({'Content-Type': 'application/json'});

this.http.post("http://localhost:9091/authservice/login", loginform,
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        //localStorage.setItem('qualification', 'MCA');
        //localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
        if(result == 'Invalid User'){
          this.error_message = "Invalid User"
        } else if (result == "User blocked"){
          alert("You are blocked by the Admin !")
        } 
        else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
          localStorage.setItem('token', result);
          
          localStorage.setItem('usermail', loginform.email_id);

          this._router.navigate(['upage'])
          //this.error_message = ""
          //this.error_message = result

        }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
}