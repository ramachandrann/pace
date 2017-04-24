import { Epaces1Page } from './app.po';

describe('epaces1 App', () => {
  let page: Epaces1Page;

  beforeEach(() => {
    page = new Epaces1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
