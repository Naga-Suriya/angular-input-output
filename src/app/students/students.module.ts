import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [CommonModule, PaginationModule],
  declarations: [StudentsComponent],
  exports: [StudentsComponent],
})
export class StudentsModule {}
