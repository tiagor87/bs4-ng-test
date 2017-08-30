import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { ModalButtonDirective } from './modal-button.directive';
import { ModalDialogDirective } from './modal-dialog.directive';
import { ModalContainerDirective } from './modal-container.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    ModalButtonDirective,
    ModalDialogDirective,
    ModalContainerDirective
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
