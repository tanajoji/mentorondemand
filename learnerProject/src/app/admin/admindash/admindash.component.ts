import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  id:string
  course_name:string
  trainer_name:string
  course_logo:string
  course_description:string
  message:string

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }
  uerror_message='';
  users = [];
  get_user_list = function() {
    this.http.get("https://localhost:44369/adminservice/studentlist").subscribe(
      (result : any[]) => {
        this.users = result;
        this.uerror_message = ""
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_user = function(id) {
    
    this.http.delete("https://localhost:44369/adminservice/"+id).subscribe(
      (result) => {
        this.uerror_message = "Deleted"
        this.users = [];
        this.get_user_list()
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  block_user = function(id) {
    console.log(id)
    this.http.put("https://localhost:44369/adminservice/block/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Blocked");
        this.get_user_list()
        
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_user = function(id) {
    console.log(id)
    this.http.put("https://localhost:44369/adminservice/unblock/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Unblocked");
        this.get_user_list()
        
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }









  merror_message='';
  mentors = [];
  get_mentor_list = function() {
    this.http.get("https://localhost:44369/adminservice/mentorlist").subscribe(
      (result : any[]) => {
        this.mentors = result;
        console.log(result)
        this.merror_message = ""
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_mentor = function(id) {
    this.http.delete("https://localhost:44369/adminservice/"+id).subscribe(
      (result) => {
        
        this.merror_message = "Deleted"
        this.mentors = [];
        this.get_mentor_list()
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  block_mentor = function(id) {
    console.log(id)
    this.http.put("https://localhost:44369/adminservice/block/"+id).subscribe(
      (result : any[]) => {
        this.mentots = result;
        console.log(this.mentors)
        this.merror_message = ""
        alert("Mentor Blocked");
        this.get_mentor_list()
        
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_mentor = function(id) {
    console.log(id)
    this.http.put("https://localhost:44369/adminservice/unblock/"+id).subscribe(
      (result : any[]) => {
        this.mentors = result;
        console.log(this.mentors)
        this.merror_message = ""
        alert("Mentor Unblocked");
        this.get_mentor_list()
        
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }










  terror_message='';
  techs = [];
  get_technology_list = function() {
    this.http.get("https://localhost:44369/adminservice/technologylist").subscribe(
      (result : any[]) => {
        this.techs = result;
        console.log(result)
        this.terror_message = ""
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_technology = function(id) {
    this.http.delete("https://localhost:44369/adminservice/technology/"+id).subscribe(
      (result) => {
        
        this.terror_message = "Deleted"
        this.techs = [];
        this.get_technology_list()
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }













  cerror_message='';
  courses = [];
  get_course_list = function() {
    this.http.get("http://localhost:3000/course/").subscribe(
      (result : any[]) => {
        this.courses = result;
        console.log(result)
        this.cerror_message = ""
      },
      (error) => {
        this.cerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_course = function(id) {
    this.http.delete("http://localhost:3000/course/"+id).subscribe(
      (result) => {
        
        this.cerror_message = "Deleted"
        this.courses = [];
        this.get_course_list()
      },
      (error) => {
        this.cerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }










  meserror_message='';
  messages = [];
  get_message_list = function() {
    this.http.get("http://localhost:3000/message/").subscribe(
      (result : any[]) => {
        this.messages = result;
        console.log(result)
        this.meserror_message = ""
      },
      (error) => {
        this.meserror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }


  delete_message = function(id) {
    this.http.delete("http://localhost:3000/message/"+id).subscribe(
      (result) => {
        
        this.meserror_message = "Deleted"
        this.messages = [];
        this.get_message_list()
      },
      (error) => {
        this.meserror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }







  usrFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
    t.style.display = "none";
  }
  mntrFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "none";
    m.style.display = "block";
    c.style.display = "none";
    mes.style.display = "none";
    t.style.display = "none";
  }
  crsFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "block";
    mes.style.display = "none";
    t.style.display = "none";
  }
  msgFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "block";
    t.style.display = "none";
  }
  techFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
    t.style.display = "block";
  }




  
  
  submit_form_data(id:string){

    var body = "course_name=" + this.course_name 
        + "&trainer_name=" + this.trainer_name 
        + "&course_logo=" + this.course_logo
        + "&course_description=" + this.course_description;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.put("http://localhost:3000/course/"+id, body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully Updated"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or any other error";
      }
    )
  }






  ngOnInit() {
    this.get_user_list();
    this.get_mentor_list();
    this.get_course_list();
    this.get_message_list();
    this.get_technology_list();
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    var t = document.getElementById("tech");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
    t.style.display = "none";
  
  } 

}

