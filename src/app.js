import { from } from 'rxjs';
import { ObservablesFromEventExample } from './examples/1-from-events';

const exampleEvents = new ObservablesFromEventExample();

// exampleEvents.getObservable().subscribe(
//     data => console.log(data),
// );

exampleEvents.testClickEvent();