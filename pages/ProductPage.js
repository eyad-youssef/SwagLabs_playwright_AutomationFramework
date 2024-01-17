const { expect } = require('@playwright/test');


exports.ProductPage = class ProductPage{ 
  constructor(page){ 
    this.page =  page; 
    
    // this.productLabel = page.getByRole('link', { name: 'Sauce Labs Backpack' }) 
    this.productPrice= page.getByText('$29.99')
    this.product = page.getByText('Sauce Labs Backpackcarry.');
    this.addToCartButton= page.getByRole('button', { name: 'ADD TO CART' }).nth(1) ;
    this.cartButton= page.locator('#shopping_cart_container').getByRole('link');
    this.checkoutButton= page.getByRole('link', { name: 'CHECKOUT' });

  } 
 
  async getProductName(){ 
    let productname = await this.product.textContent(); 
    console.log(productname)
  } 

  async getProductPrice(){ 
    let productprice = await this.productPrice.textContent();
    console.log(productprice)
    await expect.soft(this.productPrice).toHaveText("$29.99")
  }
  async getProduct(){  
    await this.product.click(); 
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

 
