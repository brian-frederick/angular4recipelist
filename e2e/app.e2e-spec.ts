import { RecipeListPage } from './app.po';

describe('recipe-list App', () => {
  let page: RecipeListPage;

  beforeEach(() => {
    page = new RecipeListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
