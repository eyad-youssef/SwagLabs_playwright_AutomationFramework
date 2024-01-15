const { test, expect,chromium } = require('@playwright/test');
import{OrdersPage}from '../pages/OrdersPage';

test('orders test',async({page})=>{  
    
    const ordersPage=  new OrdersPage(page);
    await ordersPage.finishOrder();
})