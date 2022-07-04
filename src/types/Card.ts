export type Image = {
    ImageNo: number,
    ImageUrl: string
}
  
export interface Product {
    Title: string,
    ProductId: number,
    MoonpigProductNo: string,
    ProductImage: {
        Link: {
            Href: string
        }
    }
}

export interface CardInfo extends Product {
    ImageUrls: Image[]
}

export interface Cards {
    Products: Product[]
}