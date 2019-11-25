import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usercompleted',
  templateUrl: './usercompleted.component.html',
  styleUrls: ['./usercompleted.component.css']
})
export class UsercompletedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.get_training_list();
    
  }


  userId:string;
  error_message='';
  courses = [];
  get_training_list = function() {



    this.http.get("https://localhost:44369/studentservice/getuserid/"+localStorage.getItem('usermail')).subscribe(
      (result) => {
       
        console.log(result);
        this.userId = result['id'];
        console.log(this.userId)
        this.get_list();
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )


  }

  get_list = function() {
    this.http.get("https://localhost:44369/studentservice/completedtraininglist/"+this.userId).subscribe(
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
