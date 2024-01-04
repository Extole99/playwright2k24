const {test,expect} = require('@playwright/test');

/*
Let us consider 
Test1 & Test2 - Both tests are @sanity Tag
Test3 & Test4 - Both tests are @reg Tag
Test5 - Is contains both @sanity & @reg

Execution :
 @sanity only execute -> npx playwright test --grep @sanity
 @reg only execute -> npx playwright test --grep @reg

*/


test('Test1@sanity', async ({page})=>{
    console.log("this is my Test1.............");
})

test('Test2@sanity', async ({page})=>{
    console.log("this is my Test2.............");
})

test('Test3@reg', async ({page})=>{
    console.log("this is my Test3.............");
})

test('Test4@reg', async ({page})=>{
    console.log("this is my Test4.............");
})

test('Test5@sanity@reg', async ({page})=>{
    console.log("this is my Test5.............");
})