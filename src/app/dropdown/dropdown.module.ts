import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownButtonDirective } from './dropdown-button.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownService } from './dropdown.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DropdownComponent,
    DropdownButtonDirective,
    DropdownMenuDirective
  ],
  exports: [DropdownComponent],
  providers: [DropdownService]
})
export class DropdownModule {}
