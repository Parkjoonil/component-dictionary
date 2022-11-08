import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const introLeftAnimation = trigger('introLeftAnimation', [
    transition(':enter', [
        animate('0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateX(-50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateX(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)', keyframes([
            style({
                transform: "translateX(0)",
                opacity: "1",
                offset: 0
            }),
            style({
                transform: "translateX(-50px)",
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introBottomAnimation = trigger('introBottomAnimation', [
    transition(':enter', [
        animate('0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateY(50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)', keyframes([
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 0
            }),
            style({
                transform: "translateY(50px)",
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introRightAnimation = trigger('introRightAnimation', [
    transition(':enter', [
        animate('0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateX(50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateX(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)', keyframes([
            style({
                transform: "translateX(0)",
                opacity: "1",
                offset: 0
            }),
            style({
                transform: "translateX(50px)",
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introTopAnimation = trigger('introTopAnimation', [
    transition(':enter', [
        animate('0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateY(-50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)', keyframes([
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 0
            }),
            style({
                transform: "translateY(-50px)",
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introBottomFadeAnimation = trigger('introBottomFadeAnimation', [
    transition(':enter', [
        animate('0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateY(50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0s', keyframes([
            style({
                opacity: "1",
                offset: 0
            }),
            style({
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introTopFadeAnimation = trigger('introTopFadeAnimation', [
    transition(':enter', [
        animate('0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "translateY(-50px)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "translateY(0)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0s', keyframes([
            style({
                opacity: "1",
                offset: 0
            }),
            style({
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

export const introFadeDetailInOutAnimation = trigger('introFadeDetailInOutAnimation', [
    transition(':enter', [
        animate('0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
            style({
                transform: "rotateY(-360deg)",
                opacity: "0",
                offset: 0
            }),
            style({
                transform: "rotateY(0deg)",
                opacity: "1",
                offset: 1.0
            })
        ])),
    ]),
    transition(':leave', [
        animate('0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)' , keyframes([
            style({
                transform: "rotateY(0deg)",
                opacity: "1",
                offset: 0
            }),
            style({
                transform: "rotateY(-360deg)",
                opacity: "0",
                offset: 1.0
            })
        ])),
    ]),
]);

