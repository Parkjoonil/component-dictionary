import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { MODAL_DATA } from './modal-token'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  component: any;

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }

  openOverlay(): void {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global(),
      hasBackdrop: true,
      backdropClass: 'bg-black-50',
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    overlayRef.attach(new ComponentPortal(this.component, null, new PortalInjector(this.injector, new WeakMap().set(MODAL_DATA, 'test'))));

    overlayRef.backdropClick().subscribe(_ => {
      overlayRef.dispose();
    })
  }
}
