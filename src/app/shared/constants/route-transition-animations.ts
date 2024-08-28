import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Paths } from 'src/app/app-routing.module';

export const slidePageTransitionAnimations = trigger('slidePages', [
  transition(`${Paths.MAIN} => *, ${Paths.CAREER_HISTORY} => ${Paths.ACADEMIC_HISTORY}, ${Paths.ACADEMIC_HISTORY} => ${Paths.COMPLEMENTARY_EDUCATION}, ${Paths.COMPLEMENTARY_EDUCATION} => ${Paths.CAREER_HISTORY}`, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.8s ease-out', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('0.8s ease-out', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition(`* => ${Paths.MAIN}, ${Paths.CAREER_HISTORY} => ${Paths.COMPLEMENTARY_EDUCATION}, ${Paths.COMPLEMENTARY_EDUCATION} => ${Paths.ACADEMIC_HISTORY}, ${Paths.ACADEMIC_HISTORY} => ${Paths.CAREER_HISTORY}`, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.8s ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('0.8s ease-out', style({ left: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
]);
