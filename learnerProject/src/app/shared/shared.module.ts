import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [HomeComponent, NavComponent, CoursesComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
