import ABIBase from './api'

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

export interface ProductAPI extends ABIBase {
    data:Product[]
}