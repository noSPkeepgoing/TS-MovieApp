import { Store } from '../core/sunpaaaa';

interface State {
  photo: string;
  name: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo:
    'https://github.com/noSPkeepgoing/JS-MovieApp/assets/125979833/83e4410f-4667-4a00-af05-2067ab31b984',
  name: 'noSPkeepgoing / Sunpaaaa',
  github: 'https://github.com/noSPkeepgoing',
  repository: 'https://github.com/noSPkeepgoing/JS-MovieApp',
});
