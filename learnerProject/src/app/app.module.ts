import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { MentorloginComponent } from './mentor/mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentor/mentorsignup/mentorsignup.component';
import { MentorpageComponent } from './mentor/mentorpage/mentorpage.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { CoursesComponent } from './shared/courses/courses.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AuthService } from './auth.service';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { AddtechnologyComponent } from './admin/addtechnology/addtechnology.component';
import { EdittechnologyComponent } from './admin/edittechnology/edittechnology.component';
import { MtechlistComponent } from './mentor/mtechlist/mtechlist.component';
import { MaddcourseComponent } from './mentor/maddcourse/maddcourse.component';
import { McourselistComponent } from './mentor/mcourselist/mcourselist.component';
import { McompletedlistComponent } from './mentor/mcompletedlist/mcompletedlist.component';
import { CourselistComponent } from './user/courselist/courselist.component';
import { UpdateprofileComponent } from './mentor/updateprofile/updateprofile.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { UsercurrentComponent } from './user/usercurrent/usercurrent.component';
import { UsercompletedComponent } from './user/usercompleted/usercompleted.component';



 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UserloginComponent,
    UsersignupComponent,
    MentorloginComponent,
    MentorsignupComponent,
    MentorpageComponent,
    UserpageComponent,
    CoursesComponent,
    AdminloginComponent,
    AdmindashComponent,
    AddcourseComponent,
    AddtechnologyComponent,
    EdittechnologyComponent,
    MtechlistComponent,
    MaddcourseComponent,
    McourselistComponent,
    McompletedlistComponent,
    CourselistComponent,
    UpdateprofileComponent,
    UserpaymentComponent,
    UsercurrentComponent,
    UsercompletedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
