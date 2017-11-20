import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId" : 2,
                "productName" : "Satelite Broadband 5Tb/s",
                "productCode" : "BB-5T",
                "releaseDate" : "March 23, 2018",
                "description" : "Lightening 5Tb/s Satelite Broadband",
                "price" : 14.99,
                "starRating" : 5.0,
                "imageUrl" : "https://openclipart.org/download/144799/power-thumb.svg"
            },
            {
                "productId" : 5,
                "productName" : "SpaceX TShirt",
                "productCode" : "TS-SPX33",
                "releaseDate" : "March 23, 2018",
                "description" : "SpaceX TShirt",
                "price" : 19.99,
                "starRating" : 4.5,
                "imageUrl" : "https://openclipart.org/image/2400px/svg_to_png/274172/elonmuskmoon.png"
            },
            {
                "productId" : 7,
                "productName" : "Lunar Flyby",
                "productCode" : "LF-SPX2018",
                "releaseDate" : "March 23, 2018",
                "description" : "Lightening 5Tb/s Satelite Broadband",
                "price" : 3200100.99,
                "starRating" : 5.0,
                "imageUrl" : "https://openclipart.org/download/214100/scifirocketplanet.svg"
            }            
        ];
    }
}