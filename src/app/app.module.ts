import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  imports: [BrowserModule, FormsModule, StudentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
