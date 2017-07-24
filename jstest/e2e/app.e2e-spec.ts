import { JstestPage } from './app.po';

describe('jstest App', () => {
  let page: JstestPage;

  beforeEach(() => {
    page = new JstestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
