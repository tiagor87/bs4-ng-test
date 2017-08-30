import { Injectable, EventEmitter } from '@angular/core';

export interface Modal {
  open: EventEmitter<void>;
  close: EventEmitter<void>;
}

export class ModalService {
  private modals: {} = {};
  private global: Modal;
  private modalOpened: Modal;

  constructor() {
    this.global = {
      open: new EventEmitter<void>(),
      close: new EventEmitter<void>()
    };
  }

  register(id?: string) {
    return !!id
      ? (this.modals[id] = {
          open: new EventEmitter<void>(),
          close: new EventEmitter<void>()
        })
      : this.global;
  }

  open(id: string) {
    if (!id) {
      throw new Error();
    }
    if (!this.modals[id]) {
      throw new Error();
    }
    this.close();
    this.modalOpened = this.modals[id];
    this.modalOpened.open.emit();
    this.global.open.emit();
  }

  close() {
    if (!!this.modalOpened) {
      this.modalOpened.close.emit();
      this.global.close.emit();
      this.modalOpened = null;
    }
  }
}
