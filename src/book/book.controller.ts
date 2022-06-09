import { Controller,Get,Query } from '@nestjs/common';
import {BookService} from './book.service';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Get('search')
    async searchBooks(@Query() queryParams): Promise<any> {
        return this.bookService.searchBooks(queryParams);
    }
}
