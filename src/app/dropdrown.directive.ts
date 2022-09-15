import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirctive{
    @HostBinding('class.open') isOpem = false;

    @HostListener('document:click', ['$event']) toggleOpen(){
        this.isOpem = this.elementRef.nativeElement.contains(event?.target) ? !this.isOpem : false;
    }
    constructor(private elementRef: ElementRef){ }
}