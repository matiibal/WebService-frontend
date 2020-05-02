import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Student, StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private studentService: StudentService, private route: ActivatedRoute,
              private router: Router) {
  }

  private student: Student = {
    id: 1,
    name: '',
    surname: '',
    index: 1,
    city: '',
    numberOfFlat: '',
    postalCode: '',
    town: '',
    phoneNumber: ''
  };
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.studentService.getStudentById(this.id)
      .subscribe(data => {
        console.log(data);
        this.student = data;
      }, error => console.log(error));
  }

  update(): void {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }

}
