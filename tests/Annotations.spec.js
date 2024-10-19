// test.only() = only these tests run. othet tests will ignore

// test.skip()  = this will used for skip the test

// test.fixme()  = this is also used for skip the tset , we will use when our test need to be fixed

// test.fail() = this is used for to assert our test should be fail, if our test not fail it will throw exception
 //                both expected and actual is fail then test will pass, otherwise test will fail

 // test.slow() marks the test as slow and triples the test timeout.



import {test, expect} from '@playwright/test';

// test.only('test1', async({page}) => {

//     console.log('This is test1');
// })

test.skip('test2', async({page}) => {

    console.log('This is test2');      // skipped
})

test('test3', async({page}) => {
    test.fixme()

    console.log('This is test3');     // // skipped
})


test('test4', async({page}) => {
    test.fail()                      // expectation our test should be fail

    console.log('This is test4');

     expect(1).toBe(2)               //  expected value 1 and actual value 2 - validation fail, so our expectation also fail, now tesr.fail() assertion pass
})

test.only('test5', async({page}) => {
    //test.slow()
   // test.setTimeout(5000)
    console.log('This is test5');
    await page.goto('https://www.amazon.in/');
})