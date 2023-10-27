const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines 2', () => {
  test('Search LambdaTest on Bing', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/")
await page.click("//a[text()='Drag & Drop Sliders']")
const dragslider=await page.locator("//input[@type='range' and @value='15']")
let temp=15
while(temp!='95')
{
    let expectedvalue =await page.locator("//output[@id='rangeSuccess']")
    await dragslider.press('ArrowRight')
    temp++
}
console.log(temp)
await page.waitForTimeout(5000)

})
})
