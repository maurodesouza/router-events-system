import { BaseEventHandle } from '../base';
import { QueryHandleEvents } from './query';

class NavigationHandleEvents extends BaseEventHandle {
  query = new QueryHandleEvents()

  constructor() {
    super();
  }
}

export { NavigationHandleEvents };
