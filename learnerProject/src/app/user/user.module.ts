import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CourselistComponent } from './courselist/courselist.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';



@NgModule({
  declarations: [UserloginComponent, UsersignupComponent, UserpageComponent, CourselistComponent, UserpaymentComponent, UsercurrentComponent, UsercompletedComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
