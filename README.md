# Agify API BDD Test Suite

This project contains a **BDD-style automated test suite** for the [Agify API](https://agify.io), which predicts the age of a person based on their name. The tests are written using **TypeScript** and **Cucumber**, focusing on **API functionality**, not UI testing.

## Features

- Automated **GET requests** for valid and invalid names.  
- Validates **response status codes** and **data types**.  
- Tests **error handling** for unsupported parameters and HTTP methods.  
- Written in **TypeScript** with **Cucumber step definitions**.  
- Easily extendable for additional API scenarios.

## Prerequisites

- **Node.js:** v22.18.0  
- **NPM:** 10.9.3


## Setup Instructions

**Clone the repository**

git clone https://github.com/Bhuvan27799/agify-api-tests.git
-cd agify-api-tests


**Install dependencies**

-npm install


**Run tests**

-npm test


You should see output indicating scenarios and steps passed.

## Project Structure

<img width="332" height="136" alt="image" src="https://github.com/user-attachments/assets/b0372fc6-ddb8-4cb0-9cf0-d2b2539c97bc" />


## Notes

-This suite is focused on functional API testing, not the accuracy of Agify’s age predictions.

-The project uses ES modules in TypeScript, so ensure Node supports them (v14+).
