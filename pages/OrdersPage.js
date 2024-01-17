
import{test,expect} from '@playwright/test'; 

 exports.OrdersPage = class OrdersPage{  
   constructor(page){
     this.page= page;  




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



  
    async getPaymentInfo(){ 
      await expect.soft(this.paymentInfo).toContainText('#31337')
    } 

    async getShippingInfo(){ 
      await expect.soft(this.shippingInfo).toContainText('FREE PONY EXPRESS DELIVERY!')
    } 


   async finishOrder(){ 
    await expect.soft(this.finishButton).toBeEnabled()
    await expect.soft(this.finishButton).toContainText('FINISH');
    await this.finishButton.click();
    await expect.soft(this.finishHeading).toContainText('THANK YOU FOR YOUR ORDER');


}
    

 


 }



 
