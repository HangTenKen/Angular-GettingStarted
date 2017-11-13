import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        console.log('In ConverToSpacesPipe.');
        return value.replace(character, ' ');
    }
}