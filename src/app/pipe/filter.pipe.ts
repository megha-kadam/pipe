import { Pipe, PipeTransform } from "@angular/core";
import { Iplayer } from "../models/player";

@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(arr : Array<Iplayer>, serachValue : string, searchField : string) {
        if(!serachValue){
            return arr
        }
        if(!arr){
            return []
        }

        let filterArr = arr.filter(p => (p as any)[searchField].toString().toLowerCase().includes(serachValue.toLowerCase()))

        return filterArr
    }
    
}