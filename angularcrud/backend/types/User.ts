export interface BasicUser {
    id: number,
}
export interface User extends BasicUser {
    nume: string,
    prenume: string,
    datanastere:Date, //string
    email:string,
    telefon: string,
    cnp?:string,
    poza?:string,
    dataadaugare?:Date,
    status?:number,
    actiune?:string
}
export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,

}