
import{test,expect} from '@playwright/test'; 

 exports.OrdersPage = class OrdersPage{  
   constructor(page){
     this.page= page;  

// class="summary_subtotal_label"

// class="inventory_item_price"
// class="summary_tax_label"


      this.paymentInfo= page.getByText('SauceCard #');
      this.shippingInfo =page.getByText('FREE PONY EXPRESS DELIVERY!');
      this.itemsPrice= page.getByText('Item total: $'); 
     


      this.taxAmount= page.getByText('Tax: $')
      this.totalPrice =page.getByText('Total: $') 
      this.finishButton=  page.getByRole('link', { name: 'FINISH' });
      this.finishHeading=page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDERS' });

   }  




    async getPaymentInfo(){ 
      await expect.soft(this.paymentInfo).toContainText('#321337')
    } 

    async getShippingInfo(){ 
      await expect.soft(this.shippingInfo).toContainText('FREE PONY EXPRESS DELIVERY!')
    } 


    // async getPriceInfo(){ 
    //    const actualPrices = await page.textContent('Item total: $')
    //   // console.log(await this.itemsPrice.textContent()); 
      
    //   await expect.soft(actualPrices).toEqual('Item total: $65.98');
    //   // console.log(await this.taxAmount.textContent()); 
    //   await expect.soft(this.totalPrice).toEqual(440);
    //   // console.log(await this.totalPrice.textContent('Total: $')); 

      

    // }

   async finishOrder(){ 
    await expect.soft(this.finishButton).toBeEnabled()
    await expect.soft(this.finishButton).toContainText('FINISH');
    await this.finishButton.click();
    await expect.soft(this.finishHeading).toContainText('THANKs YOU FOR YOUR ORDER');


}
    

 


 }



 
