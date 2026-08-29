import {test,expect} from "@playwright/test"
test ('button test' ,async({ page },testInfo)=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    let inputbutton = page.locator('//button[@type="submit"]');
     await expect (inputbutton).toBeEnabled();
  const buttonvisible:boolean = await inputbutton.isVisible();
    
     console.log("buttonvisible :",buttonvisible)

     await expect (inputbutton).toHaveText('Login');
     let inputname=page.locator('//input[@name="username"]')
     await inputname.fill('Chaitanya')
     await page.locator('//input[@name="password"]')
     await page.locator('//input[@name="password"]').fill("user123")
     await inputbutton.click();
     const screenshot = await page.screenshot({ fullPage: true });
  await testInfo.attach('Submission Confirmation Screenshot', {
    body: screenshot,
    contentType: 'image/png',
  })
     

});