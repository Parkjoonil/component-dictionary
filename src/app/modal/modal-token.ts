import {InjectionToken, ViewContainerRef} from '@angular/core';

export const MODAL_DATA = new InjectionToken<any>('MODAL_DATA');

export const MODAL_CONTAINER = new InjectionToken<ViewContainerRef>('MODAL_CONTAINER');
