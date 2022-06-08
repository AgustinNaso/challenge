import { Controller, Get, Query } from '@nestjs/common';
import { SellsService } from './sells.service';

@Controller('sells')
export class SellsController {
    constructor(private sellsService : SellsService) {}
    @Get()
    getSells(@Query('brand') brand: string, @Query('product') product: string, @Query('category') category:string) {
        return this.sellsService.getSells(category, product, brand)
    }
}
