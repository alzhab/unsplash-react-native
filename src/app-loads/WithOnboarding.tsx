import React, {Component, ReactElement} from 'react';
import {observer} from 'mobx-react';
import {onboardingStore} from '@stores';

@observer
class WithOnboarding extends Component<{
  hideSplash: () => void;
}> {
  componentDidMount() {
    onboardingStore.getShowIntroFromStorage().then((res) => {
      setTimeout(() => {
        this.props.hideSplash();
      }, 3000);
    });
  }

  render(): ReactElement {
    return <>{this.props.children}</>;
  }
}

export default WithOnboarding;
