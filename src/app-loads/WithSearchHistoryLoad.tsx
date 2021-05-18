import React, {Component, ReactElement} from 'react';
import {observer} from 'mobx-react';
import {photosStore} from '@stores';

@observer
class WithSearchHistoryLoad extends Component<{
  hideSplash: () => void;
}> {
  componentDidMount() {
    photosStore.getSearchHistoryFromStorage().then((res) => {
      this.props.hideSplash();
    });
  }

  render(): ReactElement {
    return <>{this.props.children}</>;
  }
}

export default WithSearchHistoryLoad;
