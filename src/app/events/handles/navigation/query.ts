import { Events } from 'types';
import { BaseEventHandle } from '../base';

type Query = {
  key: string
  value: string
}

class QueryHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  add = (data: Query | Query[]) => {
    const payload = Array.isArray(data) ? data : [data]

    this.emit(Events.NAVIGATION_QUERY_ADD, payload)
  }

  remove = (data: string | string[]) => {
    const payload = Array.isArray(data) ? data : [data]

    this.emit(Events.NAVIGATION_QUERY_REMOVE, payload)
  }

  clear = () => {
    this.emit(Events.NAVIGATION_QUERY_CLEAR)
  }
}

export { QueryHandleEvents };
