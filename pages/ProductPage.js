const { expect } = require('@playwright/test');


exports.ProductPage = class ProductPage{ 
  constructor(page){ 
    this.page =  page; 
    
    
    this.product=  page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button');
 // this.producttext= page.locator('div').filter('[class="inventory_item_desc]');
    this.addToCartButton= page.getByRole('button', { name: 'ADD TO CART' }).nth(1) ;
    this.cartButton= page.locator('#shopping_cart_container').getByRole('link');
    this.checkoutButton= page.getByRole('link', { name: 'CHECKOUT' });

  } 

  async chooseFromProducts(){ 
    // foreach(){ choose}
    // then get its price and save it 
    //  then pass it 
    
  }

  async getProduct(){  
    // await expect(this.producttext).toContainText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom wont unravel.');
    await this.product.click(); 
    await expect.soft(this.addToCartButton).toBeEnabled()
    await expect.soft(this.addToCartButton).toContainText('ADD TO CART');
    await this.addToCartButton.click();

  } 

  async goToCart(){ 
    //  await expect(this.cartButton).toContainText('LOGIN');
     await this.cartButton.click();
  }


  async checkout(){
     await expect.soft(this.checkoutButton).toBeEnabled()
     await expect.soft(this.checkoutButton).toContainText('CHECKOUT');
     await this.checkoutButton.click();

  }

  }

 
