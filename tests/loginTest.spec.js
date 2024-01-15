const { test, expect,chromium } = require('@playwright/test');
const{LoginPage}= require('../pages/LoginPage')
// import{SearchPage} from'../pages/SearchPage'; 
import{ProductPage} from'../pages/ProductPage'; 
import{AddressPage} from'../pages/AddressPage';
import{OrdersPage}from '../pages/OrdersPage'; 

test.beforeEach('login',async({page})=>{ 
    
   
     await page.goto('https://www.saucedemo.com/v1/index.html');
        const loginPage=   new LoginPage(page);  
        await loginPage.login('standard_user','secret_sauce'); 

})