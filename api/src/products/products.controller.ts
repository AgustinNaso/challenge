import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService : ProductsService) {}
    @Get()
    findProducts(@Query('category') category:string){
       return this.productsService.getProducts(category);
    }
}
