import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

export class ObservablesFromEventExample {

  getObservable() {
    // Create an observable from the 'mousemove' event
    const observableMouseEvents$ = fromEvent(document, 'mousemove');

    // Use the operator throttleTime via a pipe
    observableMouseEvents$.pipe(throttleTime(5000));

    return observableMouseEvents$;
  }

  testClickEvent() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(throttleTime(1000));
    result.subscribe(x => console.log(x));
  }
}