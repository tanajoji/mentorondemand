import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { EdittechnologyComponent } from './edittechnology/edittechnology.component';



@NgModule({
  declarations: [AdminloginComponent, AdmindashComponent, AddcourseComponent, AddtechnologyComponent, EdittechnologyComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
