import { Injectable ,HttpService} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class BookFetchAPIService {

    constructor(private http: HttpService){}

    fetchAPIResponseJSON(uri:string):Observable<any>{
        return this.http.get(uri).pipe(map(response => response.data));
    }
}
