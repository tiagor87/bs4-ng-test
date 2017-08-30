import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { DropdownService } from './dropdown.service';
import { DropdownButtonDirective } from './dropdown-button.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@NgModule({
  declarations: [AppComponent, DropdownButtonDirective, DropdownMenuDirective],
  imports: [BrowserModule],
  providers: [DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule {}
