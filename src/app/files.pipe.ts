import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"filesize",
})



export class filessizepipes implements PipeTransform{
    transform(value: number) {
        return(value/(1024 *1024)).toFixed(3)+"MB"
        
    }
    
}