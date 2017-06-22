import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
}) 

export class DropdownDirective {
     @HostBinding('class.open') isOpen = false; 
     
     constructor(private elRef: ElementRef, private renderer: Renderer2) {}

     ngOninit(){

     }

     
    @HostListener('click') toggleOpen(){
        this.isOpen = ! this.isOpen;
    }
}