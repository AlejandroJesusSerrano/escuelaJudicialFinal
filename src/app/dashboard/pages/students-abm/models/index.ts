export interface Student {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    register_date: Date;
    homeAddress: string;
    city: string;
    neighborhood: string;
    zip: string;
};

export interface CreateStudentPayload {
    name: string;
    last_name: string;
    email: string;
    password: string;
    register_date: Date;
    homeAddress: string;
    city: string;
    neighborhood: string;
    zip: string;
}