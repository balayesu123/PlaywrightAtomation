// You can now run tests that have a particular tag with --grep command line option.

// npx playwright test tests/Tag.spec.js --grep "@sanity"

// if you want the opposite, you can skip the tests with a certain tag:

// npx playwright test tests/Tag.spec.js --grep  "@sanity" --grep-invert  "@regration"

import {test, expect} from '@playwright/test';

test('test1 @sanity', async({page}) => {

    console.log('This is sanity test1');
})

test('test2 @sanity', async({page}) => {

    console.log('This is sanity test2');
})

test('test3 @regration', async({page}) => {

    console.log('This is regration test3');
})


test('test4 @regration', async({page}) => {

    console.log('This is regration test4');
})

test('test5 @sanity@regration', async({page}) => {

    console.log('This is sanity and regration test5');
})
