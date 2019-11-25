import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edittechnology',
  templateUrl: './edittechnology.component.html',
  styleUrls: ['./edittechnology.component.css']
})
export class EdittechnologyComponent implements OnInit {

  Id:number
  TechnologyName:string
  Commission:string
  
  
  message:string
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Id =  parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(this.Id);
    });

    this.http.get("http://localhost:9091/adminservice/technology/"+this.Id).subscribe(
      (result) => {
       
        console.log(result);
        this.TechnologyName = result['technologyName'];
        this.Commission = result['commission'];
        
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data(form){

    form = JSON.stringify(form);
    console.log(form);
    

    

    
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put("http://localhost:9091/adminservice/technology/"+this.Id,form, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully Updated"
        this.router.navigate(['/admindash'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or any other error";
      }
    )
    }
  }