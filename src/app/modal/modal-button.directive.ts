import { Directive, Input, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[appModalButton]'
})
export class ModalButtonDirective {
  @Input() target: string;
  @Input() close = false;
  constructor(private service: ModalService) {}

  @HostListener('click')
  openClose() {
    this.close ? this.service.close() : this.service.open(this.target);
  }
}
