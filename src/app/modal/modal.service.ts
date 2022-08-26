import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';

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

    overlayRef.attach(this.component, null);

    overlayRef.backdropClick().subscribe(_ => {
      overlayRef.dispose();
    })
  }
}
