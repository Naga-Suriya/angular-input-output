import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  studentsList: Student[] = [
    {
      name : "Nagaraj",
      age : 29,
      sex : 'male'
    },
    {
      name : "Suriya",
      age : 29,
      sex : 'male'
    }
  ];

}
