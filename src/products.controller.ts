import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get()
  findAll(): string {
    return this.productService.getProducts();
  }
}
