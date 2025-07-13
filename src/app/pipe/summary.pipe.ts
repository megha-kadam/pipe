import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit : number = 50) {
        return value.slice(0, limit) + "..."
    }
}