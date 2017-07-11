import { GpCoursePage } from './app.po';

describe('gp-course App', () => {
  let page: GpCoursePage;

  beforeEach(() => {
    page = new GpCoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
