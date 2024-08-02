import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from './student.model';
import { NgFor } from '@angular/common';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor, StudentDetailComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, AfterViewInit, OnDestroy {
  students: IStudent[] | undefined;
  selectedStudent?: IStudent;
  private studentSubscription: Subscription | undefined;

  constructor(private readonly studentService: StudentService) {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.studentSubscription = this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    if (this.studentSubscription) {
      this.studentSubscription.unsubscribe();
    }
  }

  selectStudent(student: IStudent) {
    this.selectedStudent = student;
  }
}
