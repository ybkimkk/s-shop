export interface APIBase<T> {
    data: {
        code: number,
        msg: string,
        data: T
    }
}