import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getAll(): string {
        return 'Get All Category'
    }
}