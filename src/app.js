// import { ObservablesFromEventExample } from './examples/1-from-events';
// import { HttpClient } from './examples/3-http-client';
// import { RenderEngine } from './examples/3-render-engine';

import { ExampleCreate } from './examples/1-example-create';

ExampleCreate.createObservableWithNumbers().subscribe(
    (number) => {
      console.log(number);
    },
    (error) => console.error(error),
    () => console.log('Completed'),
);

//
// Example with events
//
// const exampleEvents = new ObservablesFromEventExample();

// exampleEvents.getObservable().subscribe(
//     data => {
//       console.log(data.screenX);
//     },
// );

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