import { GraphTraversalProjPage } from './app.po';

describe('graph-traversal-proj App', () => {
  let page: GraphTraversalProjPage;

  beforeEach(() => {
    page = new GraphTraversalProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
