import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})

export class UsersignupComponent implements OnInit {
  user_name;
  email_id;
  pass_word;
  status;
  message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit_form_data(signupform){
  
    signupform.status="active";
    signupform.role=3;
    console.log(signupform);
    signupform= JSON.stringify(signupform);
    console.log(signupform);
    
    // console.log("user_name : " + this.user_name);
    // console.log("email_id : " + this.email_id);
    // console.log("pass_word : " + this.pass_word);

    // var body = "user_name=" + this.user_name 
    //     + "&email_id=" + this.email_id 
    //     + "&pass_word=" + this.pass_word
    //     + "&status=" + "active";
    
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("http://localhost:9091/authservice/register",signupform, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully registered"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}
