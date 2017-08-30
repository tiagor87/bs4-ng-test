import {
  Directive,
  HostBinding,
  OnInit,
  Input,
  OnDestroy
} from '@angular/core';
import { DropdownService } from './dropdown.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective implements OnInit, OnDestroy {
  @Input() id: string;
  @HostBinding('class.show') show: boolean;
  private subscription: Subscription;
  constructor(private service: DropdownService) {}

  ngOnInit() {
    this.subscription = this.service.register(this.id).subscribe(() => {
      this.show = !this.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
