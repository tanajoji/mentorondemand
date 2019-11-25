import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email_id;
  user_message;
  message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit_form_data(){
    console.log("email_id : " + this.email_id);
    console.log("user_message : " + this.user_message);

    var body = "email_id=" + this.email_id 
        + "&user_message=" + this.user_message; 
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/message/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Your Message Has Been Sent !";
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
        console.log(this.message)
      }
    )
  }

}
