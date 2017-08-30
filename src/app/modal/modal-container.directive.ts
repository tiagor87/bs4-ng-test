import { Directive, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appModalContainer]'
})
export class ModalContainerDirective implements OnInit, OnDestroy {
  @HostListener('class.modal-open') isOpen = false;

  openSubscriber: Subscription;
  closeSubscriber: Subscription;
  constructor(private service: ModalService) {}

  ngOnInit() {
    const modal = this.service.register();
    this.openSubscriber = modal.open.subscribe(() => {
      this.isOpen = true;
    });
    this.closeSubscriber = modal.close.subscribe(() => {
      this.isOpen = false;
    });
  }

  ngOnDestroy() {
    this.openSubscriber.unsubscribe();
    this.closeSubscriber.unsubscribe();
  }
}
