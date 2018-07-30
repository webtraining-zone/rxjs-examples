// import { ObservablesFromEventExample } from './examples/2-from-events';
// import { HttpClient } from './examples/3-http-client';
// import { RenderEngine } from './examples/3-render-engine';

// import { ExampleCreate } from './examples/1-example-create';

// ExampleCreate.createObservableWithNumbers().subscribe(
//     (number) => {
//       console.log(number);
//     },
//     (error) => console.error(error),
//     () => console.log('Completed'),
// );

// const observer = ExampleCreate.createObservableWithStreamNumbers().subscribe(
//     number => console.log(number),
//     error => console.error(error),
//     () => console.log('Completed'),
// );
//
// setTimeout(() => {
//   observer.unsubscribe();
//   console.warn('Unsubscribed');
// }, 2001);

//
// Example with events
//
// const exampleEvents = new ObservablesFromEventExample();
//
// setTimeout(() => {
//   // The "observable" is hot becuase it started even before the subscription was activated!
//   exampleEvents.getHotObservable().subscribe(
//       data => {
//         console.log(data.screenX);
//       },
//   );
// }, 3000);

// exampleEvents.testClickEvent();

//
// Examples with fetch
//
// const url = 'http://rentals-api.webtraining.fun/api/vehicles';
//
// HttpClient.get(url).subscribe(vehicles => {
//
//   console.log(vehicles);
//
//   RenderEngine.renderVehicles({
//     el: '#app',
//     data: vehicles,
//   });
//
// });

import { ExampleSubjects } from './examples/4-subjects';

ExampleSubjects.testSubject();