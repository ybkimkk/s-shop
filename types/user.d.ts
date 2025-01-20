import { APIBase } from "./api";

export interface Register {
    name: string,
    phone: string,
    email: string,
    invitationCode: string,
    password: string,
    code: string
}

export type RegisterAPI = APIBase<Register>