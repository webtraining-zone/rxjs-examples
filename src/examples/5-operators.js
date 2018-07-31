// Methods you can use on Observables / Subjects
// Modify the "stream" and return a new one
// http://rxmarbles.com/
import { Observable, merge as mergeStatic, from } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

export class OperatorsExamples {

  static getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  static testMergeOperator() {

    let observable1$ = Observable.create(observer => {
      setInterval(() => {
        observer.next('Obs 1: ' + this.getRandom(1, 1000));
      });
    }, 100);

    let observable2$ = Observable.create(observer => {
      setInterval(() => {
        observer.next('Obs 2: ' + this.getRandom(1, 1000));
      });
    }, 200);

    // Pseudo-operator "merge static"
    // See: https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md
    let observer = mergeStatic(observable1$, observable2$).subscribe(
        number => console.log(number),
    );

    setTimeout(() => {
      observer.unsubscribe();
    }, 1000);

  }

  static testFilterOperator() {
    const observable$ = from([1, 3, 4, 6, 7, 43]);

    // Filter only "even" numbers and map them to their "square"
    observable$.pipe(
        filter(number => number % 2 === 0), map(number => number ** 2)).
        subscribe(
            number => console.log(number),
        );
  }

  static testPluckOperator() {

    const observable$ = from([
      {
        id: 1,
        email: 'esmeralda@webtraining.zone',
        roles: ['teacher'],
      }, {
        id: 2,
        email: 'luis@webtraining.zone',
        roles: ['student'],
      }, {
        id: 2,
        email: 'ady@webtraining.zone',
        roles: ['teacher'],
      }]);

    // Get only "email" property
    observable$.pipe(
        pluck('email'), map(email => email.toUpperCase())).
        subscribe(
            number => console.log(number),
        );
    
  }
}