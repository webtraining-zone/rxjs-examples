import { Observable } from 'rxjs';

export class ExampleCreate {
  static createObservableWithNumbers() {
    const $observable = Observable.create(function subscribe(observer) {

      observer.next(1);
      observer.next(2);
      observer.complete();

      observer.next(3);
    });

    return $observable;
  }
}