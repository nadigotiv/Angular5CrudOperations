import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"searchData"})
export class SearchDataPipe implements PipeTransform{
    public transform(value, keys: string, term: any) {

        if (!term) return value;
        return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    
      }
    }
//     transform(input:any[],searchvar:string,col:string)
//     {
// if(searchvar!=undefined && col!=undefined && searchvar!="")
// {
// return input.filter((e)=>e[col].indexOf(searchvar)>-1)//this is the arro function
// }
// else
// return input
//     }
