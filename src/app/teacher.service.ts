import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { TEACHERS } from './mock-teachers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  getTeachers(): Observable<Teacher[]> {
    const teachers = of(TEACHERS);
    this.messageService.add('Serviço de professor: professores buscados');
    return teachers;
  }

  constructor(private messageService: MessageService) { }

  getTeacher(idprof: number): Observable<Teacher> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const teacher = TEACHERS.find(h => h.idprof === idprof)!;
    this.messageService.add(`TeacherService: fetched teacher id=${idprof}`);
    return of(teacher);
  }
}
