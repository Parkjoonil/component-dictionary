import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const jelloAnimation = trigger('jelloAnimation', [
    transition('* => *', [
        animate('1.5s ease', keyframes([
            style({
                transform: "scale3d(1, 1, 1)",
                offset: 0
            }),
            style({
                transform: "scale3d(1.25, .75, 1)",
                offset: 0.3
            }),
            style({
                transform: "scale3d(.75, 1.25, 1)",
                offset: 0.4
            }),
            style({
                transform: "scale3d(1.15, .85, 1)",
                offset: 0.5
            }),
            style({
                transform: "scale3d(.95, 1.05, 1)",
                offset: 0.65
            }),
            style({
                transform: "scale3d(1.05, .95, 1)",
                offset: 0.75
            }),
            style({
                transform: "scale3d(1, 1, 1)",
                offset: 1
            }),
        ])),
    ]),
]);

export const heartbeatAnimation = trigger('heartbeatAnimation', [
    transition('* => *', [
        animate('1.5s ease', keyframes([
            style({
                transform: "scale(1)",
                "transform-origin": "center center",
                "animation-timing-function": "ease-out",
                offset: 0
            }),
            style({
                transform: "scale(.91)",
                "animation-timing-function": "ease-in",
                offset: 0.1
            }),
            style({
                transform: "scale(.98)",
                "animation-timing-function": "ease-out",
                offset: 0.17
            }),
            style({
                transform: "scale(.87)",
                "animation-timing-function": "ease-in",
                offset: 0.33
            }),
            style({
                transform: "scale(1)",
                "animation-timing-function": "ease-out",
                offset: 0.45
            }),
        ])),
    ]),
]);