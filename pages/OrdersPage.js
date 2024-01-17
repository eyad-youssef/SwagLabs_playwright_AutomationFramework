
import{test,expect} from '@playwright/test'; 
import { ProductPage } from '../pages/ProductPage'; 

 exports.OrdersPage = class OrdersPage{  
   constructor(page){
     this.page= page;  

// class="summary_subtotal_label"

// class="inventory_item_price"
// class="summary_tax_label"

      const pp = new ProductPage(page); 

      this.firstItemInBill = page.getByRole('link', { name: 'Sauce Labs Bike Light' }); 
      this.firstPriceInBill = page.getByText('$9.99', { exact: true });
      this.paymentInfo= page.getByText('SauceCard #');
      this.shippingInfo =page.getByText('FREE PONY EXPRESS DELIVERY!');
      this.itemsPrice= page.getByText('Item total: $'); 
     


      this.taxAmount= page.getByText('Tax: $')
      this.totalPrice =page.getByText('Total: $') 
      this.finishButton=  page.getByRole('link', { name: 'FINISH' });
      this.finishHeading=   page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });

   }  



  async getBilItems(){ 
      // await expect.soft(this.firstItemInBill).toHaveValue("name");
      console.log("first item in bill is " + this.firstItemInBill.toString(textContent())) ; 
      console.log(" first price in bill is " + this.firstPriceInBill.textContent());
    }
    async getPaymentInfo(){ 
      await expect.soft(this.paymentInfo).toContainText('#31337')
    } 

    async getShippingInfo(){ 
      await expect.soft(this.shippingInfo).toContainText('FREE PONY EXPRESS DELIVERY!')
    } 


    async getPriceInfo(){ 
       const actualPrices = await page.textContent('Item total: $')
       console.log(await this.itemsPrice.textContent()); 
      
      await expect.soft(actualPrices).toEqual('Item total: $65.98');
      console.log(await this.taxAmount.textContent()); 
      await expect.soft(this.totalPrice).toEqual(440);
      console.log(await this.totalPrice.textContent('Total: $')); 

      

    }

   async finishOrder(){ 
    await expect.soft(this.finishButton).toBeEnabled()
    await expect.soft(this.finishButton).toContainText('FINISH');
    await this.finishButton.click();
    await expect.soft(this.finishHeading).toContainText('THANK YOU FOR YOUR ORDER');


}
    

 


 }



 
