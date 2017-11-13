import { Component }from '@angular/core';

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId" : 2,
            "productName" : "Satelite Broadband 5Tb/s",
            "productCode" : "BB-5T",
            "releaseDate" : "March 23, 2018",
            "description" : "Lightening 5Tb/s Satelite Broadband",
            "price" : 14.99,
            "starRating" : 5.0,
            "imageUrl" : "http://openclipart.org/pdf/144799/power-thumb.pdf"
        },
        {
            "productId" : 5,
            "productName" : "SpaceX TShirt",
            "productCode" : "TS-SPX33",
            "releaseDate" : "March 23, 2018",
            "description" : "SpaceX TShirt",
            "price" : 19.99,
            "starRating" : 4.5,
            "imageUrl" : "http://openclipart.org/pdf/274172/elonmuskmoon.pdf"
        },
        {
            "productId" : 7,
            "productName" : "Lunar Flyby",
            "productCode" : "LF-SPX2018",
            "releaseDate" : "March 23, 2018",
            "description" : "Lightening 5Tb/s Satelite Broadband",
            "price" : 300100.99,
            "starRating" : 5.0,
            "imageUrl" : "http://openclipart.org/pdf/214100/scifirocketplanet.pdf"
        }
    ];
}