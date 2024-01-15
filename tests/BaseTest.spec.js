const { test, expect,chromium } = require('@playwright/test');
const{LoginPage}= require('../pages/LoginPage')
// import{SearchPage} from'../pages/SearchPage'; 
import{ProductPage} from'../pages/ProductPage'; 
import{AddressPage} from'../pages/AddressPage';
import{OrdersPage}from '../pages/OrdersPage';

test.beforeEach('setup',async({page})=>{ 
    
   
     await page.goto('https://www.saucedemo.com/v1/index.html');
     await page.screenshot({ path: 'screenshot.png' });
        const loginPage=   new LoginPage(page);  
        await loginPage.login('standard_user','secret_sauce'); 

})
test('End to end scenario',async({page})=>{  
     const productPage= new ProductPage(page);
    const addressPage= new AddressPage(page);
    const ordersPage=  new OrdersPage(page);
   
    
    await productPage.getProduct();
    await productPage.goToCart();
    await productPage.checkout();
    await addressPage.enterAddressDetails(
        'hassan',
        'Ali',
        '13513'); 
    await addressPage.clickOnContinueButton(); 
    
        await ordersPage.getPaymentInfo(); 
        await ordersPage.getShippingInfo(); 
        // await ordersPage.getPriceInfo(); 
    await ordersPage.finishOrder();
})