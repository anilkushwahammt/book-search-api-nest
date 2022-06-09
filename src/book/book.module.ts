import { Module,HttpModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import {BookFetchAPIService} from './book.fetch.api.service'
import {BookFilterService} from './book.filter.dynamic'

@Module({
  imports: [HttpModule],
  controllers: [BookController],
  providers: [BookService,BookFetchAPIService,BookFilterService]
})
export class BookModule {}
