import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {AddStudentComponent} from './add-student/add-student.component';


const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
