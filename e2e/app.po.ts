import { browser, element, by } from 'protractor';

export class TwitchStatsPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Text() {
    return element(by.css('app-content h1')).getText();
  }
}
