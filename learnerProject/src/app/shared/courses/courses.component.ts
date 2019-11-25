import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
// export class CoursesComponent implements OnInit {

//   constructor(private http: HttpClient) { }


  

//   cerror_message='';
//   ccourses = [];
//   get_searched_course = function(course_name) {
//     var s = document.getElementById("search_heading");
//     s.style.display = "block";
//     this.http.get("http://localhost:3000/course/"+course_name).subscribe(
//       (result : any[]) => {
//         this.ccourses = result;
//         this.cerror_message = "" 
//       },
//       (error) => {
//         this.cerror_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )
//   }



//   error_message='';
//   courses = [];
//   get_course_list = function() {
//     this.http.get("http://localhost:3000/course/").subscribe(
//       (result : any[]) => {
//         this.courses = result;
//         this.error_message = ""
//       },
//       (error) => {
//         this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )
//   }

//   ngOnInit() {
//     this.get_course_list();
//     var s = document.getElementById("search_heading");
//     s.style.display = "none";
//   }

// }











export class CoursesComponent implements OnInit {
TechnologyName: string;
  TechnologyId: number;
  UserId: string;
  CourseFee: number;
  StartDate: Date;
  EndDate: Date;


  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.get_course_list();
    
    
  }



  




  message:string;
  mentorId:string;
  error_message='';
  courses = [];
  get_course_list = function() {





    this.http.get("http://localhost:9091/mentorservice/courselist").subscribe(
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



  
  
  

  getmentorprofile= function(id: string) {
    this.http.get("http://localhost:9091/studentservice/getmentorprofile/"+id).subscribe(
      (result) => {
        this.mentor = result;
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