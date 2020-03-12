import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  clicked = false;
  @HostBinding("class.open")
  isOpen: boolean;

  @HostListener("click")
  mouseClicked(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
