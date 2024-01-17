const { test, expect,chromium } = require('@playwright/test');
const{LoginPage}= require('../pages/LoginPage')
import{ProductPage} from'../pages/ProductPage'; 

test('product test',async({page})=>{  
    
    const productPage= new ProductPage(page);
    await productPage.getProduct();
    await productPage.goToCart();
    await productPage.checkout();
   
})