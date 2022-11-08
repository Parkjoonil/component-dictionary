import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const menuAnimation = trigger('menuAnimation', [
    transition(':enter', [
        style({
            maxHeight: '0%',
            opacity: '.3'
        }),
        animate('200ms ease-in', style({
            maxHeight: '100%',
            opacity: '1'
        })),
    ]),
    transition(':leave', [
        style({
            maxHeight: '100%',
            opacity: '1'
        }),
        animate('200ms ease-out', style({
            maxHeight: '0%',
            opacity: '.3'
        })),
    ]),
]);

export const menuRotateAnimation = trigger('menuRotateAnimation', [
    state('true', style({
        transform: 'rotate(-180deg)'
    })),
    state('false', style({ 
        transform: 'rotate(0deg)'
    })),
    transition('true <=> false', animate('200ms ease-in')),
]);

export const menuExposeAnimation = trigger('menuExposeAnimation', [
    transition(':enter', [
        animate('0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715)', keyframes([
            style({
                transform: 'scale(2)',
                filter: 'blur(2px)',
                opacity: '0',
                offset: '0'
             }),
            style({
                transform: 'scale(1)',
                filter: 'blur(0)',
                opacity: '1',
                offset: '1'
                }),

        ]))
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715)', keyframes([
            style({
                transform: 'scale(1)',
                filter: 'blur(0)',
                opacity: '1',
                offset: '0'
             }),
            style({
                transform: 'scale(2)',
                filter: 'blur(2px)',
                opacity: '0',
                offset: '1'
                }),

        ]))
    ])
]);

export const menuExposeDetailAnimation = trigger('menuExposeDetailAnimation', [
    state('open', style({
        transform: 'scale(2)',
        filter: 'blur(2px)',
        opacity: '0',
        offset: '0'
    })),
    state('close', style({ 
        transform: 'scale(1)',
        filter: 'blur(0)',
        opacity: '1',
        offset: '1'
    })),
    
    transition('open <=> close', animate('0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715)'))
]);