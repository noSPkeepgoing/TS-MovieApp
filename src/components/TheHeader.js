import { Component } from '../core/sunpaaaa';

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          { name: 'Search', href: '#/' },
          { name: 'About', href: '#/about' },
        ],
      },
    });

    window.addEventListener('popstate', () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
        <a href='#/' class='logo'><span>OMDbAPI</span>.COM</a>
        <nav>
            <ul>
                ${this.state.menus
                  .map((menu) => {
                    const href = menu.href;
                    const hash = location.hash;
                    const isActive = href === hash;
                    return /* html */ `
                    <li>
                        <a class="${isActive ? 'active' : ''}" href="${
                      menu.href
                    }">${menu.name}</a>
                    </li>
                    `;
                  })
                  .join('')}
            </ul>
        </nav>
        <a href="#/about" class="user">
            <img />
        </a>
        `;
  }
}
