const { expect } = require('@playwright/test');


exports.ProductPage = class ProductPage{ 
  constructor(page){ 
    this.page =  page; 
    
    this.productLabel = page.locator("[class=\"inventory_item_name\"]")
    this.product=  page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button');
    this.addToCartButton= page.getByRole('button', { name: 'ADD TO CART' }).nth(1) ;
    this.cartButton= page.locator('#shopping_cart_container').getByRole('link');
    this.checkoutButton= page.getByRole('link', { name: 'CHECKOUT' });

  } 

  async getProduct(){  
    await this.product.click();
    console.log(await this.productLabel.textContent());
    await expect.soft(this.addToCartButton).toBeEnabled()
    await expect.soft(this.addToCartButton).toContainText('ADD TO CART');
    await this.addToCartButton.click();

  } 

  async goToCart(){ 
     await this.cartButton.click();
  }


  async checkout(){
     await expect.soft(this.checkoutButton).toBeEnabled()
     await expect.soft(this.checkoutButton).toContainText('CHECKOUT');
     await this.checkoutButton.click();

  }

  }

 
