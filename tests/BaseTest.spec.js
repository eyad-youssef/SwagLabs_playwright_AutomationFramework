const { test, expect,chromium } = require('@playwright/test');
const{LoginPage}= require('../pages/LoginPage')

import{ProductPage} from'../pages/ProductPage'; 
import{AddressPage} from'../pages/AddressPage';
import{OrdersPage}from '../pages/OrdersPage';


test.beforeAll('setup',async({page})=>{ 
    
     const loginPage = new LoginPage(page);  
     await page.goto('https://www.saucedemo.com/v1/index.html');
     await page.screenshot({ path: 'screenshot.png' });
     await loginPage.login('standard_user','secret_sauce'); 

})
test('End to end scenario',async({page})=>{  
    
    const productPage= new ProductPage(page);
    const addressPage= new AddressPage(page);
    const ordersPage=  new OrdersPage(page);
  
    await productPage.getProduct(); 
    await productPage.getProductName(); 
    await productPage.getProductPrice();
    await productPage.goToCart();
    await productPage.checkout();
    await addressPage.enterAddressDetails(
        'Amr',
        'Ali',
        '13513'); 
    await addressPage.clickOnContinueButton(); 
    await ordersPage.getProductChecked();
    await ordersPage.getPaymentInfo(); 
    await ordersPage.getShippingInfo(); 
    await ordersPage.finishOrder();
})