import { Overlay } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }
}
