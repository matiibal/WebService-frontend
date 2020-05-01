import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Student, StudentService} from '../service/student.service';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Id', 'Imię', 'Nazwisko', 'Nr indeksu', 'Nr telefonu',
    'Ulica', 'Nr domu', 'Kod pocztowy', 'Miasto', 'Edytuj', 'Usuń'];
  dataSource;
  students: Observable<Student[]>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(e => {
      this.dataSource = new MatTableDataSource<Student>(e);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addStudent() {
    this.router.navigate(['addStudent']);
  }

  delete(id: number) {
    this.studentService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => console.log(error));
  }

  ngAfterViewInit(): void {
    this.ngOnInit();
  }
}
