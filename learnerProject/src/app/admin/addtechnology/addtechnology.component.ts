import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {

  message='';
 
  constructor(private http: HttpClient, private _route:Router) { }

  ngOnInit() {
  }

  submit_form_data(form){
    

    form = JSON.stringify(form);
  
    console.log(form);
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44369/adminservice/addtechnology", form, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Technology Has Been Added !";
        this._route.navigate(['/admindash'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}
