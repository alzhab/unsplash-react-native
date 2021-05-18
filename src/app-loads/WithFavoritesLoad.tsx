import React, {Component, ReactElement} from 'react';
import {observer} from 'mobx-react';
import {favoritesStore} from '@stores';

@observer
class WithOnboarding extends Component<{
  hideSplash: () => void;
}> {
  componentDidMount() {
    favoritesStore.getFavoritesIdsFromStorage().then((res) => {
      this.props.hideSplash();
    });
  }

  render(): ReactElement {
    return <>{this.props.children}</>;
  }
}

export default WithOnboarding;
