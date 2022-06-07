import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('Serviço estudantil: estudantes buscados');
    return students;
  }

  constructor(private messageService: MessageService) { }

  getStudent(id: number): Observable<Student> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const student = STUDENTS.find(h => h.id === id)!;
    this.messageService.add(`Estudante Selecionado id=${id}`);
    return of(student);
  }
}