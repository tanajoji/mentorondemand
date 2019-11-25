import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-usercurrent',
  templateUrl: './usercurrent.component.html',
  styleUrls: ['./usercurrent.component.css']
})
export class UsercurrentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.get_trainings_list();
  }




  userId:string;
  error_message='';
  courses = [];
  get_trainings_list = function() {



    this.http.get("http://localhost:9091/studentservice/getuserid/"+localStorage.getItem('usermail')).subscribe(
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
    this.http.get("http://localhost:9091/studentservice/traininglist/"+this.userId).subscribe(
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
