
export interface Course {
    id: number;
    course: string;
    init_date: Date;
    finish_date: Date;
    course_detail: string;
    
}

export interface CreateCoursePayload{
    course: string;
    init_date: Date;
    finish_date: Date;
    course_detail: string;
}