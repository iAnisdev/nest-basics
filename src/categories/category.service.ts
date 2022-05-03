import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  categories: CreateCategoryDto[] = [];
  getAll(): CreateCategoryDto[] {
    return this.categories;
  }
  create(data: CreateCategoryDto): CreateCategoryDto {
    this.categories.push(data);
    return data;
  }
}
