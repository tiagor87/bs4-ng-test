import { Injectable, ElementRef, EventEmitter } from '@angular/core';

export class DropdownService {
  private dropdowns = {};
  constructor() {}

  public register(id: string) {
    if (!id) {
      throw new Error('Should inform parameter "id"');
    }
    if (!!this.dropdowns[id]) {
      throw new Error(`Dropdown ${id} already registered`);
    }
    return (this.dropdowns[id] = new EventEmitter<void>());
  }

  public emitClick(id: string) {
    if (!id) {
      throw new Error(`Should inform parameter "id"`);
    }
    if (!this.dropdowns[id]) {
      throw new Error(`Dropdown ${id} not found`);
    }
    const event: EventEmitter<void> = this.dropdowns[id];
    event.emit();
  }
}
