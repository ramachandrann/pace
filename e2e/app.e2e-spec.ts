import { PacePage } from './app.po';

describe('pace App', () => {
  let page: PacePage;

  beforeEach(() => {
    page = new PacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
