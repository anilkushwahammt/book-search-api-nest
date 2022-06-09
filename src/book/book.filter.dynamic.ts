import { Injectable } from '@nestjs/common';
import {_} from 'lodash';

@Injectable()
export class BookFilterService {

    filterBooks(bookResponse:[],filterCriteria:any):any{
        const filteredBook = bookResponse.filter(book => {
            try{
                let isValid = true;
                for (let key in filterCriteria) {
                   const data =  _.get(book, key);
                   if(_.isArray(data)){
                       isValid = isValid && data.includes(filterCriteria[key]);
                   }else if(key.includes('$date')){
                        var comingDate = new Date(data);
                        var reqDate = new Date(filterCriteria[key]);
                        if(filterCriteria[key].length == 4){
                            isValid = isValid && comingDate.getFullYear() ==  reqDate.getFullYear();
                        }else{
                            isValid = isValid && comingDate.getFullYear() ==  reqDate.getFullYear() && comingDate.getMonth() ==  reqDate.getMonth() && comingDate.getDay() ==  reqDate.getDay();
                        }
                   }else{
                       isValid = isValid && data == filterCriteria[key];
                   }
                }
                return isValid;
            }catch{
            
            }
          });
          return filteredBook;
    }
}
