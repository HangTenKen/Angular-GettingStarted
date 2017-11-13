import { Component, OnInit }from '@angular/core';
import { IProduct } from './product';

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
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

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'Broadband';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}