import { APIBase } from "./api";

export interface UserRegister {
    name: string,
    phone: string,
    email: string,
    token: string,
    invitationCode: string,
    password: string,
    code: string
}

export type UserRegisterAPI = APIBase<UserRegister>

export interface UserLogin {
    email: string,
    password?: string,
    code?: string
}

export interface UserLoginUI extends UserLogin {
    type: number
}

export type UserLoginAPI = APIBase<UserLogin>