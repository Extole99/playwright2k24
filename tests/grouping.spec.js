const { test, expect } = require('@playwright/test');


test.beforeAll(async()=>{
    console.log("====== this is before all =====")
})

test.afterAll(async()=>{
    console.log("====== this is afterAll.... =====")
})

test.beforeEach(async()=>{
    console.log("this is beforeEach....")
})

test.afterEach(async()=>{
    console.log("this is afterEach")
})

test.describe('Group_1', () => {
    test('Test1', async ({ page }) => {
        console.log('Test1 Passed....');
    })

    test('Test2', async ({ page }) => {
        console.log('Test2 Passed....');
    })
})

test.describe('Group_2', () => {
    test('Test3', async ({ page }) => {
        console.log('Test3 Passed....');
    })

    test('Test4', async ({ page }) => {
        console.log('Test4 Passed....');
    })
})




