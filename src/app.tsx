import React, {Component, ReactElement} from 'react';
import {Splash} from '@modules';
import {STATUSBAR_PROPS} from '@config/base';
import {StatusBar} from 'react-native';
import {
  WithOnboarding,
  WithStores,
  WithFavoritesLoad,
  WithSearchHistoryLoad,
} from './app-loads';
import RootNavigation from './root-navigation';
import {Header} from '@components';

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
    onFavoritesLoaded: false,
    onSearchHistoryLoaded: false,
  };

  render(): ReactElement {
    const loading =
      !this.state.onBoardingLoaded ||
      !this.state.onFavoritesLoaded ||
      !this.state.onSearchHistoryLoaded;

    return (
      <>
        <StatusBar {...STATUSBAR_PROPS} />

        <WithSearchHistoryLoad
          hideSplash={() => this.setState({onSearchHistoryLoaded: true})}>
          <WithFavoritesLoad
            hideSplash={() => this.setState({onFavoritesLoaded: true})}>
            <WithOnboarding
              hideSplash={() => this.setState({onBoardingLoaded: true})}>
              {!loading ? (
                <WithStores>
                  <RootNavigation />
                </WithStores>
              ) : null}
              <Splash show={loading} />
            </WithOnboarding>
          </WithFavoritesLoad>
        </WithSearchHistoryLoad>
      </>
    );
  }
}

export default App;
