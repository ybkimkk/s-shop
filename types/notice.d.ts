import { APIBase } from "./api";

export interface Notice {
    createBy: Date,
    id: number,
    title: string,
    content: string
}

export type NoticeListAPI = APIBase<Notice[]>
export type NoticeAPI = APIBase<Notice>