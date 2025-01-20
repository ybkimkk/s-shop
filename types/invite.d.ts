import {APIBase} from "./api";

export interface Invite {
    imgSrc: string,
    InviteCode: string,
}

export type InviteListAPI = APIBase<Invite[]>
export type InviteAPI = APIBase<Invite>

export interface CheckInvited {
    id: number,
    phone: string,
    name: string,
    invitationCode?: string,
    password: string,
    email: string
}

export type CheckInvitedAPI = APIBase<CheckInvited>