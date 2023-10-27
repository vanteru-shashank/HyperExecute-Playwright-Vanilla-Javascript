const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines 1', () => {
  test('test_1', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground')
    await page.click("//a[text()='Simple Form Demo']")
    //const url = await expect(page).toHaveURL('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    const link = page.url()
    if(link.includes('simple-form-demo')){
        console.log(link)
        }
    else{
        console.log('link doesnot matched')
    }
    const inputmessage='Shashankreddy'
    await page.locator("//input[@id='user-message']").fill(inputmessage)
    await page.click("//button[text()='Get Checked Value']")
    const displayedmessage =  await page.locator("//p[@id='message']").innerText(inputmessage)
    
    if(inputmessage==displayedmessage){
        console.log(displayedmessage)
    }
    else{
        console.log('inplut message is not displayed')
    }
    await page.waitForTimeout(5000)
    })
  })