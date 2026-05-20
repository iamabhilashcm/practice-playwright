import {expect, test} from '@playwright/test'

test('validate amazon search laptop and select the lenovo method1', async({page})=>{

    await page.goto('https://www.amazon.in')

    await page.locator('#twotabsearchtextbox').fill('laptop')

    await page.keyboard.press('Enter')

    await expect (page.getByText('Deals & Discounts')).toBeVisible()
   
   await page.locator('#brandsRefinements')
  .getByText('Lenovo', { exact: true })
  .click();


});

test('medthod 2 search by placeholder and search and filter', async({page})=>{

    await page.goto('https://www.amazon.in')

    await page.getByPlaceholder('Search Amazon.in').fill('laptop')

    await page.keyboard.press('Enter')

    //or
    //  await page.locator('#nav-search-submit-button').click()

    await expect (page.getByText('Deals & Discounts')).toBeVisible()
   
   await page.locator('#brandsRefinements')
  .getByText('Lenovo', { exact: true })
  .click();


});

