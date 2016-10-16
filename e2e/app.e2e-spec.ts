import { Deploy1Page } from './app.po';

describe('deploy1 App', function() {
  let page: Deploy1Page;

  beforeEach(() => {
    page = new Deploy1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
