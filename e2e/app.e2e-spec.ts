import { TwitchStatsPage } from './app.po';

describe('twitch-stats App', () => {
  let page: TwitchStatsPage;

  beforeEach(() => {
    page = new TwitchStatsPage();
  });

  it('should display message saying Sticky footer with fixed navbar', () => {
    page.navigateTo();
    expect(page.getH1Text()).toEqual('Sticky footer with fixed navbar');
  });
});
