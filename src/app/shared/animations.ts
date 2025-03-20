// src/app/shared/animations.ts

import { animate, style, query, group } from '@angular/animations';

export function commonTransition(reverse: boolean = false) {
  return [
    style({ position: 'relative' }),

    query(':enter, :leave', [style({ position: 'absolute', width: '100%', top: 0, left: 0 })], {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({
            transform: `translateY(${reverse ? '-100%' : '100%'})`,
            opacity: 0,
          }),
          animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          animate(
            '500ms ease-in',
            style({
              transform: `translateY(${reverse ? '100%' : '-100%'})`,
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ];
}
