import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  
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



  userpayment = function(id: Number, technologyName: string, courseFee: Number, startDate: Date, endDate: Date) {

    this.http.get("http://localhost:9091/studentservice/getuserid/"+localStorage.getItem('usermail')).subscribe(
      (result) => {
        this.UserId = result['id'];
        this.TechnologyId = id;
        this.TechnologyName = technologyName;
        this.CourseFee = courseFee;
        this.StartDate = startDate;
        this.EndDate = endDate;
        console.log(id);
        console.log(courseFee);
        console.log(this.UserId);
        this.useraddtraining();
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
  
  useraddtraining(){
   
  var body= JSON.stringify({
    TechnologyId: this.TechnologyId,
    TechnologyName: this.TechnologyName,
    UserId: this.UserId,
    CourseFee: this.CourseFee,
    StartDate: this.StartDate,
    EndDate: this.EndDate
  })
  
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.post("http://localhost:9091/studentservice/addtraining", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, training Successfully added!";
        this.router.navigate(['/userpayment'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Already Registered?";
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
