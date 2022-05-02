import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): string {
    return 'Will show All products ';
  }
}
