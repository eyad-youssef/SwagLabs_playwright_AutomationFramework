const { expect } = require('@playwright/test');
exports.AddressPage= class AddressPage {  
  constructor(page){  
    this.page = page; 

  this.firstName=  page.locator('[data-test="firstName"]');
  this.lastName= page.locator('[data-test="lastName"]');
  this.postalCode= page.locator('[data-test="postalCode"]');
  this.continueButton= page.getByRole('button', { name: 'CONTINUE' }); 


  }

async enterAddressDetails( firstName,lastName,postalCode){ 
   await this.firstName.fill(firstName);
   await expect.soft(firstName).toHaveLength(3);
   await this.lastName.fill(lastName); 
   await expect.soft(lastName).toHaveLength(3);
   await this.postalCode.fill(postalCode)
   await expect.soft(postalCode).toHaveLength(5);
} 
  


  async clickOnContinueButton()
{  
   await expect.soft(this.continueButton).toBeEnabled()
   await expect.soft(this.continueButton).toContainText('CONTINUE');
   await this.continueButton.click();
  }




}
  
  