export interface User {
    id: number,
    userName: string,
    email: string,
    password: string,
    token: string
}

export interface LogInFormValue {
    userName: string,
    email: string,
    password: string
}