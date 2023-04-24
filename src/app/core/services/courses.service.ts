import { Injectable } from '@angular/core';
import { Course } from 'src/app/layout/dashboard/pages/courses/courses.component';

@Injectable()
export class CoursesService {
    private courses: Course[] = [];

    constructor() { }

    getCourses(): Promise<Course[]> {
        return new Promise(resolve => {
            
            setTimeout(() => {
                this.courses = [
                    { 
                        id: 1,
                        course: 'Formacion en Genero - Ley Micaela',
                        content: 'Este Programa procura brindar las herramientas necesarias para articular los ejes de igualdad de géneros y acceso a la justicia.'
                    },
                    { 
                        id: 2,
                        course: 'leY Yolanda',
                        content: 'El Programa busca garantizar la formación integral en ambiente con perspectiva de desarrollo sostenible. '
                    },
                    { 
                        id: 3,
                        course: 'PROFAMAG',
                        content: 'El Programa de Formación para Aspirantes a Magistrados/as brinda herramientas necesarias para el ejercicio del cargo.'
                    },
                    { 
                        id: 4,
                        course: 'Capacitaciones',
                        content: 'Cursos de actualización y formación en diversas materias que hacen al ejercicio y el entendimiento de la Justicia.'
                    }
                ];
                resolve(this.courses);
            }, 2000);
        });
    }
}