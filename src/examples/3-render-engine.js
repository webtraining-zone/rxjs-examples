import $ from 'jquery';

export class RenderEngine {
  static renderVehicles(options) {
    const $domElement = $(options.el);

    const html = ['<div>'];

    options.data.forEach((vehicle) => {
      html.push(
          `<div class="alert alert-info">${vehicle.manufacturer.name} ${vehicle.model}</div>`);
    });

    html.push('</div>');

    $domElement.html(html.join(''));

  }
}