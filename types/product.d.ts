import ABIBase, { type APIBase } from './api'

export interface Product {
    id: number,
    name: string,
    originalPrice: number,
    currentPrice: number,
    specification: string,
    freight: number,
    cover: string,
    details: string,
    sort: number
}

export type ProductListAPI = APIBase<Product[]>