import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mtechlist',
  templateUrl: './mtechlist.component.html',
  styleUrls: ['./mtechlist.component.css']
})
export class MtechlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.get_technology_list();
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

}
