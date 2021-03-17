import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
//value=geri döndüreceğin tip
  transform(value: Product[], filterText:string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  //indexof :kelimenin içinde aranan değer bulunmazsa -1 değerini verir.
  //Eğer bulursa kelimedeki, aranan değeri nerede buluyorsa onun indexini arraya atar.
}
