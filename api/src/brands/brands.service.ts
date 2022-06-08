import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandsService {
    private readonly data = {
        Products : {
            Pants : {
                brands : ["Adidas", "Nike"]
            },
            Sneakers : {
                brands : ["Adidas", "Nike", "Asics"]
            },
            Computers : {
                brands : ["HP", "Apple", "Asus"]
            },
            Headsets : {
                brands : ["Razer", "JBL"]
            }
        }
    }

    getBrands(product:string){
        return this.data.Products[product].brands;
    }
}
