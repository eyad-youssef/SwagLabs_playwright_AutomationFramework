const { expect } = require('@playwright/test');
exports.LoginPage=
class LoginPage{ 

    constructor(page){
        this.page = page ; 
        this.loginButton=  page.getByRole('button', { name: 'LOGIN' });
        this.usernameTextfield = page.locator('[data-test="username"]'); 
        this.passwordTextField= page.locator('[data-test="password"]'); 
       
 
    } 
async login(username,password){  
        
              await this.usernameTextfield.fill(username);
              await this.passwordTextField.fill(password); 
              
              await expect.soft(this.loginButton).toBeEnabled()
              await expect.soft(this.loginButton).toContainText('LOGIN');
              await this.loginButton.click();  
            
 } 
  

}
 
