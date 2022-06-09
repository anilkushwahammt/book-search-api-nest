import { Injectable,Logger } from '@nestjs/common';
import {BookFetchAPIService} from './book.fetch.api.service';
import {BookFilterService} from './book.filter.dynamic';

@Injectable()
export class BookService {
    constructor(
        private bookFetchAPIService:BookFetchAPIService,
        private bookFilterService:BookFilterService
        ){}
  

   async searchBooks(filterCriteria:any){
        return this.bookFetchAPIService.fetchAPIResponseJSON('https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e');
    }
}
