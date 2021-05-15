import React, {Component, ReactElement} from 'react';
import {Splash} from '@modules';
import {STATUSBAR_PROPS} from '@config/base';
import {StatusBar} from 'react-native';
import {WithAuthCheck, WithOnboarding, WithStores} from './app-loads';
import RootNavigation from './root-navigation';

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

class App extends Component {
  state = {
    onBoardingLoaded: false,
    authCheckLoaded: false,
  };

  render(): ReactElement {
    const loading = !this.state.onBoardingLoaded || !this.state.authCheckLoaded;

    return (
      <>
        <StatusBar {...STATUSBAR_PROPS} />

        <WithAuthCheck
          hideSplash={() => this.setState({authCheckLoaded: true})}>
          <WithOnboarding
            hideSplash={() => this.setState({onBoardingLoaded: true})}>
            {!loading ? (
              <WithStores>
                <RootNavigation />
              </WithStores>
            ) : null}
            <Splash show={loading} />
          </WithOnboarding>
        </WithAuthCheck>
      </>
    );
  }
}

export default App;
