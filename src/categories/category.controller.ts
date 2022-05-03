import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll(): CreateCategoryDto[] {
    return this.categoryService.getAll();
  }

  @Post()
  create(data: CreateCategoryDto): Partial<CreateCategoryDto> {
    return this.categoryService.create(data);
  }
}
