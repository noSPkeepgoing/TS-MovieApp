import { Component } from '../core/sunpaaaa';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
        <div>
            <a href="https://github.com/noSPkeepgoing/JS-MovieApp">
                GitHub Repository
            </a>
        </div>
        <div>
            <a href="https://github.com/noSPkeepgoing">
                ${new Date().getFullYear()}
                Sunpaaaa
            </a>
        </div>
        `;
  }
}
