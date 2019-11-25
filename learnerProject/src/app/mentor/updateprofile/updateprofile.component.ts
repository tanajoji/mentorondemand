import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {


MentorId;
Name;
Experience;
TimeSlot;
LinkedinId;

  message='';
  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.get_mentor_id();
  }


  get_mentor_id = function() {





    this.http.get("https://localhost:44369/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
      (result) => {
       
        console.log(result);
        this.MentorId = result['id'];
        this.Name = result['name']
        console.log(this.MentorId)
        console.log(this.Name)
        
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )


  }



  submit_form_data(formdata){ 
    
    

    console.log(formdata);
    
      
  
    let headers = new HttpHeaders({'Content-Type': 'application/json'});





    

    this.http.post("https://localhost:44369/mentorservice/profile", formdata, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, Profile has been Saved"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }


}
