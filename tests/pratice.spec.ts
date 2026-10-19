import { test, expect } from '@playwright/test';

test('addition', async ({ page }) => {
 
    const add=(a:number,b:number) =>{
        return a+b;
};
console.log(add(10,5));

  
});

test('subtraction', async ({ page }) => {
 
    const sub=(a:number,b:number) =>{
        return a-b;
};
console.log(sub(20,10));

});

test('greeting', async ({ page }) => {
 
    const greeting = () => {
    console.log("Hello, welcome to my project");
};

greeting();
});





