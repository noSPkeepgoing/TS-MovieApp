import { Component } from '../core/sunpaaaa';

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found');
    this.el.innerHTML = /* html */ `
        <h1>
            Sorry...<br/>
            page Not Found.
        </h1>
        `;
  }
}
