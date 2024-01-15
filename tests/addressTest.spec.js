const { test, expect,chromium } = require('@playwright/test');
import{AddressPage} from'../pages/AddressPage';

test('address test',async({page})=>{  
    
    const addressPage= new AddressPage(page);
     await addressPage.enterAddressDetails(
        'Amr',
        'Ali',
        '13513'); 
    await addressPage.clickOnContinueButton();
         
   
})