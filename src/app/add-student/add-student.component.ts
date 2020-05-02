import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: any = {};

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.studentService.addStudent(this.student).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }
}
