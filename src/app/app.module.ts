import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DropdownModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
