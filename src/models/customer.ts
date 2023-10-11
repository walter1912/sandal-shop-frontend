export interface Customer {
    _id?: string;
    id?:string;
    username: string;
    password?:string;
    rePassword?: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    gender: string;
    role?: string;
}