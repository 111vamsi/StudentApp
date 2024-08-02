import { Component, Input } from '@angular/core';
import { IStudent } from '../student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent {
  @Input() selectedStudent?: IStudent;
}
