import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellsController } from './sells/sells.controller';
import { BrandsController } from './brands/brands.controller';
import { CategoriesController } from './categories/categories.controller';
import { ProductsController } from './products/products.controller';
import { SellsService } from './sells/sells.service';
import { CategoriesService } from './categories/categories.service';
import { BrandsService } from './brands/brands.service';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [AppController, SellsController, BrandsController, CategoriesController, ProductsController],
  providers: [AppService, SellsService, CategoriesService, BrandsService, ProductsService],
})
export class AppModule {}
