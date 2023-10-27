const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines 3', () => {
  test('test_3', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
const msg='Please fill in the fields.'
const a= await page.locator("//button[text()='Submit']").click()

await page.locator("//input[@id='name']").fill("VanteruShashank")
await page.locator("//input[@id='inputEmail4']").fill("vanterushashankreddy2121@gmail.com")
await page.locator("//input[@id='inputPassword4']").fill("Rssa@1997")

await page.locator("//input[@id='company']").fill("Info")
await page.locator("//input[@name='website']").fill("Info.com")
await page.locator("//select[@name='country']").selectOption('United States')
await page.locator("//input[@name='city']").fill("california")
await page.locator("//input[@name='address_line1']").fill("Ohri's street")
await page.locator("//input[@name='address_line2']").fill("PP")
await page.locator("//input[@placeholder='State']").fill("California")
await page.locator("//input[@name='zip']").fill("30017")
await page.click("//button[text()='Submit']")

const successmessage='Thanks for contacting us, we will get back to you shortly.'
const message=await page.locator("//p[@style='display: block;']").innerText(successmessage)

if(successmessage==message){
    console.log(successmessage)
}
else{
    console.log('not success')
}
await page.waitForTimeout(6000)
})
})
