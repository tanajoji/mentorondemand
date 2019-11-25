import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { MentorloginComponent } from './mentor/mentorlogin/mentorlogin.component';
import { MentorpageComponent } from './mentor/mentorpage/mentorpage.component';
import { MentorsignupComponent } from './mentor/mentorsignup/mentorsignup.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { CoursesComponent } from './shared/courses/courses.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
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




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'usignup',component:UsersignupComponent},
  {path:'ulogin',component:UserloginComponent},
  {path:'mlogin',component:MentorloginComponent},
  {path:'msignup',component:MentorsignupComponent},
  {path:'mpage',component:MentorpageComponent},
  {path:'upage',component:UserpageComponent},
  {path:'courses',component:CoursesComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'addcourse',component:AddcourseComponent},
  {path:'addtechnology',component:AddtechnologyComponent},
  {path:'edittechnology/:id',component:EdittechnologyComponent},
  {path:'mtechlist',component:MtechlistComponent},
  {path:'maddcourse/:id',component:MaddcourseComponent},
  {path:'mcourselist',component:McourselistComponent},
  {path:'mcompletedlist',component:McompletedlistComponent},
  {path:'courselist',component:CourselistComponent},
  {path:'updateprofile',component:UpdateprofileComponent},
  {path:'userpayment',component:UserpaymentComponent},
  {path:'usercurrent',component:UsercurrentComponent},
  {path:'usercompleted',component:UsercompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
