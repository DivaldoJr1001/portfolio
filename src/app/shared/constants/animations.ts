import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', height: 'calc(100% - 34px)', top: '34px', opacity: 1 }), { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 }))
      ],
        { optional: true }
      ),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-in-out', style({ opacity: 0 }))],
        { optional: true }
      ),
    ])
  ])
]);
