import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})

export class MentorsignupComponent implements OnInit {
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
    signupform.role=2;
    signupform= JSON.stringify(signupform);

    // var body = "user_name=" + this.user_name 
    //     + "&email_id=" + this.email_id 
    //     + "&pass_word=" + this.pass_word
    //     + "&status=" + "active";
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44369/authservice/register", signupform, 
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
