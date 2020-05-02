import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private getUrl = 'http://localhost:8080/allStudents';
  private addUrl = 'http://localhost:8080/addStudent';
  private deleteUrl = 'http://localhost:8080/student';
  private getStudentUrl = 'http://localhost:8080/student';
  student: any[];

  constructor(private httpClient: HttpClient) {
  }

  public getStudents(): Observable<any> {
    return this.httpClient.get(this.getUrl);
  }

  public getStudentById(id: number): Observable<any> {
    return this.httpClient.get(`${this.getStudentUrl}/${id}`);
  }

  public addStudent(student): Observable<any> {
    return this.httpClient.post(`${this.addUrl}`, student);
  }

  public deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`, {responseType: 'text'});
  }

  public updateStudent(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.getStudentUrl}/${id}`, value);
  }
}

export interface Student {
  id: number;
  name: string;
  surname: string;
  index: number;
  city: string;
  numberOfFlat: string;
  postalCode: string;
  town: string;
  phoneNumber: string;
}
