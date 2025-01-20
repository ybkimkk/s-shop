import {APIBase} from "./api";

export interface Invite {
    imgSrc: string,
    InviteCode: string,
}

export type InviteListAPI = APIBase<Invite[]>
export type InviteAPI = APIBase<Invite>