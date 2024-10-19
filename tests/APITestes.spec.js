const {test, expect} = require('@playwright/test');

var userId;

test('Get users', async({request}) => {
 
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('Create users', async({request}) => {

   const response = await request.post('https://reqres.in/api/users', 
    {
        data :   {
                 "name": "Akula",
                 "job": "engineer"
                 },
        headers : {
                    "Accept": "Application/json"
                  }    
    });

    //printing response body
    var responseBody = await response.json();
    console.log(responseBody);

    //validating status message
    expect(response.ok()).toBeTruthy();

    //validating status code
    expect(response.status()).toBe(201);

    //validating JSON API response
     expect(responseBody.name).toBe('Akula');


    //storing response id
    userId=responseBody.id;

    
})

test('Update users', async({request}) => {

    const response = await request.put('https://reqres.in/api/users/'+userId, 
        {
            data :   {
                     "name": "Akula",
                     "job": "QA"
                     },
            headers : {
                        "Accept": "Application/json"
                      }    
        });
    
        var responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(200);
        
    
})


test('Delete users', async({request}) => {

    const response = await request.delete('https://reqres.in/api/users/'+userId);
    expect(response.status()).toBe(204);

    
})