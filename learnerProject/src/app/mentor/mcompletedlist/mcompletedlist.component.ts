import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mcompletedlist',
  templateUrl: './mcompletedlist.component.html',
  styleUrls: ['./mcompletedlist.component.css']
})
export class McompletedlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.get_course_list();
    
    
  }



  




  mentorId:string;
  error_message='';
  courses = [];
  get_course_list = function() {





    this.http.get("https://localhost:44369/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
      (result) => {
       
        console.log(result);
        this.mentorId = result['id'];
        console.log(this.mentorId)
        this.get_list();
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )


  }

  get_list = function() {
    this.http.get("https://localhost:44369/mentorservice/mcompletedlist/"+this.mentorId).subscribe(
      (result : any[]) => {
        this.courses = result;
        console.log(result)
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
    
  }

}
