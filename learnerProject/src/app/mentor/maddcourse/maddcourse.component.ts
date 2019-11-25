import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maddcourse',
  templateUrl: './maddcourse.component.html',
  styleUrls: ['./maddcourse.component.css']
})
export class MaddcourseComponent implements OnInit {

  technologyId:number
  
  technologyName:string
  commission:string
  message:string
  mentorId:string
  


  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.technologyId =  parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(this.technologyId);
      console.log(localStorage.getItem('mentormail'));
    });

    this.http.get("http://localhost:9091/adminservice/technology/"+this.technologyId).subscribe(
      (result) => {
       
        console.log(result);
        this.technologyName = result['technologyName'];
        this.commission = result['commission'];
        
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )


    this.http.get("http://localhost:9091/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
      (result) => {
       
        console.log(result);
        this.mentorId = result['id'];
        //this.Commission = result['commission'];
        
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )


  }


  submit_form_data(form){

    // form = JSON.stringify(form);
    console.log(form);
    //form.courseFee = parseInt(form.courseFee);
    // var body= {"technologyId":form.technologyId,
    //             "mentorId":form.mentorId,
    //             "technologyName":form.technologyName,
    //             "commission":form.commission,
    //             "startDate":form.startDate,
    //             "endDate":form.endDate,
    //             "courseFee":form.courseFee }


    

    
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("http://localhost:9091/mentorservice/addcourse", form, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Technology Has Been Added !";
        alert("Course Has Been Added !")
        this.router.navigate(['/mpage'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
    }
}



 

  

  
  