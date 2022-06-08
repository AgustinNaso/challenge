import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly data = {
        Categories : {
            Electronics : {
                Products : ["Computers", "Headsets"]
            },
            Clothes : {
                Products : ["Pants", "Sneakers"]
            }
        }
    }

    getProducts(category:string) {
        return this.data.Categories[category].Products;
    }
}
