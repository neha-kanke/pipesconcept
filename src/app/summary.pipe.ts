import { Pipe, PipeTransform } from "@angular/core";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";



@Pipe({
    name:'summary'
})

export  class summarypipe implements PipeTransform{
    transform(value: string) {
       return value.substring(2,50)+"...."

    
    }
    
}