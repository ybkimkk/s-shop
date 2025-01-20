export interface APIBase<T> {
    data: {
        code: number,
        msg: string,
        token: string,
        data: T
    }
}