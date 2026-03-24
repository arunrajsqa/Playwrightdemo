const{test,expect} =require('@playwright/test')

test("My first test", async function({page})
{
  console.log("Hi");

  expect(100).toBe(500);

})
