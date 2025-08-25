import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import axios from "axios";
import type { AxiosResponse } from "axios";

let response: AxiosResponse;
let testUrl: string;

//
// Step Definitions
//

// Send GET request
Given('I send a GET request to {string}', async function (url: string) {
  testUrl = url;
  try {
    response = await axios.get(url);
  } catch (error: any) {
    response = error.response; // capture 4xx/5xx responses
  }
});

// Send POST request
When('I send a POST request to {string}', async function (url: string) {
  testUrl = url;
  try {
    response = await axios.post(url);
  } catch (error: any) {
    response = error.response; // capture errors
  }
});

// Assert status code
Then('the response status should be {int}', function (statusCode: number) {
  assert.strictEqual(response.status, statusCode, `Expected status ${statusCode} but got ${response.status}`);
});

// Assert key has specific value
Then('the response should contain {string} as {string}', function (key: string, value: string) {
  assert.strictEqual(response.data[key], value, `Expected ${key} to be ${value} but got ${response.data[key]}`);
});

// Assert key does not exist
Then('the response should not contain {string}', function (key: string) {
  assert.strictEqual(response.data[key], undefined, `Expected ${key} to be undefined`);
});

// Assert key has valid integer or null
Then('the response should contain a valid integer for {string}', function (key: string) {
  const val = response.data[key];
  assert.ok(Number.isInteger(val) || val === null, `${key} is not an integer or null`);
});

// Assert key has non-negative integer
Then('the response should contain a non-negative integer for {string}', function (key: string) {
  const val = response.data[key];
  assert.ok(Number.isInteger(val) && val >= 0, `${key} is not a non-negative integer`);
});
