import { Body, Controller, Get, Post } from '@nestjs/common';
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
  create(@Body() data: CreateCategoryDto): CreateCategoryDto {
    console.log("data ", data)
    return this.categoryService.create(data);
  }
}
