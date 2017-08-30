import { Directive, Input, HostListener } from '@angular/core';
import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[appDropdownButton]'
})
export class DropdownButtonDirective {
  @Input() target: string;
  constructor(private service: DropdownService) {}

  @HostListener('click')
  toggle() {
    this.service.emitClick(this.target);
  }
}
