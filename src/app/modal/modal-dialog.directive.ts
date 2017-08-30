import {
  Directive,
  HostBinding,
  OnDestroy,
  OnInit,
  Input
} from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appModalDialog]'
})
export class ModalDialogDirective implements OnInit, OnDestroy {
  @Input() id: string;
  @HostBinding('class.show') isShown;
  private openSubscription: Subscription;
  private closeSubscription: Subscription;
  constructor(private service: ModalService) {}

  ngOnInit() {
    const modal = this.service.register(this.id);
    this.openSubscription = modal.open.subscribe(() => (this.isShown = true));
    this.closeSubscription = modal.close.subscribe(
      () => (this.isShown = false)
    );
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
    this.closeSubscription.unsubscribe();
  }
}
