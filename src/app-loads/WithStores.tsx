import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import * as stores from '@stores';

class WithStores extends Component {
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>;
  }
}

export default WithStores;
