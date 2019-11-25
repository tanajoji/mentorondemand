import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentorpageComponent } from './mentorpage/mentorpage.component';
import { MtechlistComponent } from './mtechlist/mtechlist.component';
import { MaddcourseComponent } from './maddcourse/maddcourse.component';
import { McourselistComponent } from './mcourselist/mcourselist.component';
import { McompletedlistComponent } from './mcompletedlist/mcompletedlist.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';



@NgModule({
  declarations: [MentorloginComponent, MentorsignupComponent, MentorpageComponent, MtechlistComponent, MaddcourseComponent, McourselistComponent, McompletedlistComponent, UpdateprofileComponent],
  imports: [
    CommonModule
  ]
})
export class MentorModule { }
