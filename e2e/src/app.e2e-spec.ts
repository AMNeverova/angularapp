import { browser, by, element } from 'protractor';

describe('search block', () => {
  browser.get(browser.baseUrl);

  it('should contain inserted value', () => {
    let input = element(by.name('Type'));
    input.sendKeys('repositories');
    expect(input.getAttribute('value')).toBe('repositories');
  })

})

describe('results block', () => {
  browser.get(browser.baseUrl);
  let listItem = element(by.className('repo-item'));

  it('should contain results list', () => {
    let inputType = element(by.name('Type'));
    let inputLang = element(by.name('Language'));
    let inputText = element(by.className('input-text'));
    let button = element(by.className('button-search'));
  
    inputType.sendKeys('repositories');
    inputLang.sendKeys('Javascript');
    inputText.sendKeys('tetris')
    button.click();
    expect(browser.isElementPresent(listItem)).toBe(true);
  })

  it('should show results in grid view on filter click', () => {
    let gridOptionFilterEl = element(by.css('.grid'));
    let gridListEl = element(by.className('grid-results'));
    gridOptionFilterEl.click();
    expect(browser.isElementPresent(gridListEl)).toBeTruthy();
  })
})

describe('search page', () => {
  browser.get(browser.baseUrl);

  beforeEach( () => {
    let myListLink = element(by.className('mylist-link'));
    myListLink.click()
  })

  it ('should navigate to MyList page', ()=> {
    expect(browser.getCurrentUrl()).toContain('my-list');
  })

  it('should navigate to MyList page and contain myList title', () => {
    let titleEl = element(by.className('my-list_title'));
    expect(browser.isElementPresent(titleEl)).toBeTruthy();
  })
})
