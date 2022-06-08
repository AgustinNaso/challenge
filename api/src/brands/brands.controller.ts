import { Controller, Get, Query } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private brandsService : BrandsService) {}
    @Get()
    getBrands(@Query('product') product: string) {
        return this.brandsService.getBrands(product);
    }
}
