import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MODAL_DATA } from './modal-token'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }

  openOverlay<T>(component: ComponentType<T>, data: any) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const modalRef = new ModalRef(overlayRef);

    const injector = Injector.create({
            parent: this.injector,
            providers: [
              { provide: ModalRef, useValue: modalRef },
              { provide: MODAL_DATA, useValue: data }
            ],
          });

    overlayRef.attach(new ComponentPortal(component, null, injector));

    overlayRef.backdropClick().subscribe(_ => {
      overlayRef.dispose();
    })

    return modalRef;
  }

}


export class ModalRef {
  private closedResult = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {}

  public close(result?: any) {
    this.overlayRef.dispose();
    this.closedResult.next(result);
    this.closedResult.complete();
  }

  public onDismiss(): Observable<any> {
    return this.closedResult.asObservable();
  }
}
