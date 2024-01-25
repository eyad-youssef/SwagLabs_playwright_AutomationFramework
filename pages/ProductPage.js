const { expect } = require('@playwright/test');


exports.ProductPage = class ProductPage{ 
  constructor(page){ 
    this.page =  page; 
    this.productPrice = page.locator('//*[@class="inventory_container"]');
    this.product =        page.getByText('Sauce Labs Backpackcarry.');
    this.addToCartButton= page.getByRole('button', { name: 'ADD TO CART' }).nth(1) ;
    this.cartButton=      page.locator('#shopping_cart_container').getByRole('link');
    this.checkoutButton=  page.getByRole('link', { name: 'CHECKOUT' });

  } 
 
 
  async getProduct(){  
    await this.product.click(); 
    await expect.soft(this.addToCartButton).toBeEnabled()
    await expect.soft(this.addToCartButton).toContainText('ADD TO CART');
    await this.addToCartButton.click();

  }  


  async getProductName(){ 
    const productName = this.product.textContent ;
    return productName; 
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

 
