export type Product = {
    Title: string,
    ProductId: number,
    ProductImage: {
        Link: {
            Href: string
        }
    }
}

export interface Cards {
    Products: Product[]
}