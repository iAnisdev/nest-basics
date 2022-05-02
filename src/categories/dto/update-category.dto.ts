import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from './create-category.dto';

export class updateProductDto extends PartialType(CreateProductDto) {
    
}