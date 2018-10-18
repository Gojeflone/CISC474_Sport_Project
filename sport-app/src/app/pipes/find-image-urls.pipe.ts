import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'findImageUrls'
})
export class FindImageUrlsPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: any): SafeResourceUrl[] {
    if (!value) { return []; }

    if (value['match'] instanceof Function) {
      if (value.toLowerCase().match(/^http(s?):\/\/.+\..+\.(jpg|jpeg|png|gif)$/)) {
        return [this.sanitizer.bypassSecurityTrustResourceUrl(value as string)];
      } else {
        return [];
      }
    }

    if (value instanceof Array) {
      return Array.prototype.concat.apply([], (value as Array<any>).map(x => this.transform(x)));
    }

    const arr = [];
    for (const entry in value) {
      if (value.hasOwnProperty(entry)) {
        arr.push(this.transform(value[entry]));
      }
    }

    return Array.prototype.concat.apply([], arr);

  }

}
