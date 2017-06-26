import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'square'
})

export class squarePipe implements PipeTransform{
    transform(numberToConvert:number):any{
        let squaredNumber = numberToConvert*numberToConvert;
        return squaredNumber;
    }
}

@Pipe({
    name:'farenheitToCelcius',
})

export class farenheitToCelciusPipe implements PipeTransform{
    transform(farenheit:number):any{
        let celcius = ((farenheit-32)*5)/9;
        return celcius;
    }
}

@Pipe({
    name:'filter'
})

export class filterPipe implements PipeTransform{
    transform(cartoons:any,term:any){
    if(term === undefined)  return cartoons;
    else
        return cartoons.filter(function(cartoon){
            return cartoon.toLowerCase().includes(term.toLowerCase());
        });

    }
}