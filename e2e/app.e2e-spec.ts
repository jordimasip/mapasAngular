import { MapasPage } from './app.po';

describe('mapas App', () => {
  let page: MapasPage;

  beforeEach(() => {
    page = new MapasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
