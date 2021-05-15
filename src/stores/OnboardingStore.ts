import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class OnboardingStore {
  showOnboarding: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action getShowIntroFromStorage() {
    return AsyncStorage.getItem('showOnboarding')
      .then((res) => {
        this.setShowOnboarding(res === null);
      })
      .catch((e) => {
        console.log('getShowIntroFromStorage error: ', e);
      });
  }

  @action hideIntro() {
    const jsonValue = JSON.stringify(false);
    AsyncStorage.setItem('showOnboarding', jsonValue)
      .then((res) => {
        console.log('Hide onboarding: ', res);
      })
      .catch((e) => {
        console.log('Hide onboarding error: ', e);
      });
  }

  @action setShowOnboarding = (val: boolean) => {
    this.showOnboarding = val;
  };
}

const onboardingStore = new OnboardingStore();
export default onboardingStore;
