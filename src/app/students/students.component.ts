import { Component, Input, OnInit } from '@angular/core';
import { Student } from './student.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  @Input() studentsList: Student[] = [];

  constructor() {}

  ngOnInit() {}
}
