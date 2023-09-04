import { Component } from '../core/sunpaaaa';

interface State {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}

export default class TheHeader extends Component {
  public state!: State;
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
            <img src="https://github.com/noSPkeepgoing/JS-MovieApp/assets/125979833/83e4410f-4667-4a00-af05-2067ab31b984" />
        </a>
        `;
  }
}
