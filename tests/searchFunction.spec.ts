import {test,expect} from '@playwright/test'

test ('search in KB website', async({page}) => {

    await page.goto('http://javainsimpleway.com/')

    await page.getByRole('searchbox').fill('Core Java')

    await page.keyboard.press('Enter')

    await expect (page.getByText('Search Results for: Core Java')).toBeVisible()

});

test ('search box amazon', async({page})=>{

    await page.goto('https://www.amazon.in/')


    //in amazon getbyrole won't work, bcz role is not mentioned in the DOM

    await page.getByPlaceholder('Search Amazon.in').fill('laptop')

    await page.keyboard.press('Enter')

    await expect(page.getByText('results for "laptop"')).toBeVisible()


});

test ('flipkar search close the pop up and search', async({page})=>{

    await page.goto('https://www.flipkart.com/')
    await page.getByRole('button',{name:'✕'}).click()

    // search
    await page.getByRole('textbox', {name:'Search for Products, Brands'}).fill('Laptop')
    await page.keyboard.press('Enter')

    //Assertion 
    await expect(page.getByText('results for "laptop"')).toBeVisible()

});

test ('search and select Lenovo ', async({page})=>{

    await page.goto('https://www.amazon.in/')


    //in amazon getbyrole won't work, bcz role is not mentioned in the DOM

    await page.getByPlaceholder('Search Amazon.in').fill('laptop')

    await page.keyboard.press('Enter')

    await expect(page.getByText('results for "laptop"')).toBeVisible()

    // click on lenovo

    const LenovoCheckBox = page.getByLabel('Apply the filter Lenovo to narrow results')

    await LenovoCheckBox.click()

    await expect(LenovoCheckBox).toBeTruthy()

    await page.waitForLoadState('networkidle');


});


