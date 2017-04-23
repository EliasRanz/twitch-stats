import { TwitchStatsPage } from './app.po';

describe('twitch-stats App', () => {
  let page: TwitchStatsPage;

  beforeEach(() => {
    page = new TwitchStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
