import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// Subject is an observer capable to emit values
// Observable and Observer at the same time

export class ExampleSubjects {

  static testSubject() {
    const subject$ = new Subject();

    let $observer1 = subject$.subscribe(
        data => console.log('Observer 1: ', data));

    subject$.next(1);
    subject$.next(2);

    let $observer2 = subject$.subscribe(
        data => console.log('--> Observer 2: ', data),
        error => console.error(error),
        () => 'Observer 2 completed!');

    subject$.next(3);

    $observer2.unsubscribe();

    subject$.next(4);

  }

  // Behaviour Subject
  // Emit the last value (previous)

  static testBehaviorSubject() {
    const subject$ = new BehaviorSubject();

    let $observer1 = subject$.subscribe(
        data => console.log('Observer 1: ', data));

    subject$.next(1);
    // This value will be received by the behavior subject
    subject$.next(2);

    let $observer2 = subject$.subscribe(
        data => console.log('--> Observer 2: ', data),
        error => console.error(error),
        () => 'Observer 2 completed!');

    subject$.next(3);

    $observer2.unsubscribe();

    subject$.next(4);

  }

  //
  static testReplaySubject() {
    // Number of values to be dispatched for new observers
    const subject$ = new ReplaySubject(3);

    let $observer1 = subject$.subscribe(
        data => console.log('Observer 1: ', data));

    subject$.next(-3);
    subject$.next(-2);

    // Observer 2 will get from here...
    subject$.next(-1);
    subject$.next(1);
    subject$.next(2);

    let $observer2 = subject$.subscribe(
        data => console.log('--> Observer 2: ', data),
        error => console.error(error),
        () => 'Observer 2 completed!');

    subject$.next(3);

    $observer2.unsubscribe();

    subject$.next(4);

  }
}

