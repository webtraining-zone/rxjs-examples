import { Observable } from 'rxjs';

export class HttpClient {

  static prepareRequest(url) {
    return new Request(url);
  }

  static prepareInit(options) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return Object.assign({
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }, options);
  }

  static get(url, options) {
    const request = this.prepareRequest(url);
    const init = this.prepareInit(options);

    return Observable.create(function subscribe(observer) {
      fetch(request, init).
          then(response => response.json()).
          then((data) => {
            observer.next(data);
          });

    });
  }
}