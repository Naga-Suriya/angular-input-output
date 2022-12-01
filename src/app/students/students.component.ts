import { Component, Input, OnInit } from '@angular/core';

type gender = 'male' | 'female' | 'others';

interface Student {
  name: string;
  age: number;
  sex: gender;
}

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
