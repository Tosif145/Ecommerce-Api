# eCommerce App API Documentation
## Introduction
The eCommerce Api buit using Node.js, MongoDb. Using this api u can perform CRUD operation on both Products and Variants with Postman 

# 1. CURD operations for both product and variant with Postman

### NOTE: use url + endpoints together to perform crud operations, URL =>(http://localhost:3000)
#### creating/adding product to database:
* Method **"POST"**.
* Endpoint **"/api/products"**.
* In Headers selct key as **"Content-type"** and   Vaulue as **"application/json"**.
* In Body select **"raw"** and slect **"JSON"** in the dropdown menu.
* Add ur product details as shown below and click **"send"** button.
* Example: u can see the output as show below.
  

![createing product](screenshots/AddProduct.png)

#### retrieve/read product from database:
* Method **"GET"**.
* Endpoint **"/api/products"** to get all products.
* To retrieve praticular product use **"/products/:productId"**.
* click "send".

#### update product from database:
* Method **"PUT"** or **"PATCH"**.
* Endpoint **"/products/:productId"** (Replace prouductId with actual Id of the product).
* In Headers selct key as **"Content-type"** and   Value as **"application/json"**.
* In Body select **"raw"** and slect **"JSON"** in the dropdown menu.
* Add the product fields to update or replace.
* click **"send"**.

#### delete product from database:
* Method **"DELETE"**.
* Endpoint **"/products/:productId"** (Replace prouductId with actual Id of the product).
* click **"send"**.

#### creating/adding variant to database:
* Method **"POST"**.
* Endpoint **"/products/:productId/variants"** (Replace prouductId with actual Id of the product).
* In Headers selct key as **"Content-type"** and   Value as **"application/json"**.
* In Body select **"raw"** and slect **"JSON"** in the dropdown menu.
* Add ur variant details and click **"send"** button.

#### retrieve/read variant from database:
* Method **"GET"**.
* Endpoint **"/products/:productId/variants"** (Replace prouductId with actual Id of the product).
* click **"send"**.


#### update variant from database:
* Method **"PUT"** or **"PATCH"**.
* Endpoint **"/products/:productId/variants/:variantId"** (Replace prouductId and variantId with actual Id).
* In Headers selct key as **"Content-type"** and   Value as **"application/json"**.
* In Body select **"raw"** and slect **"JSON"** in the dropdown menu.
* Add the variant fields to update or replace.
* click **"send"**.

#### delete product from database:
* Method **"DELETE"**.
* Endpoint **"/products/:productId/variants/:variantId"** (Replace prouductId and variantId with actual Id).
* click **"send"**.


# 2. Search functionality
### searching product by its name:
* Method **"GET"**.
* Endpoint **"/products/search"** (U have to use '?' and 'q', if any space present replace that with '%20').
* Example: http://localhost:3000/api/products/search?q=Sample%20product
* click **"send"**.

# 3. Test Driven Development
### This techninque is use to ensure that all functionality of the code working properly.
* There many TDD tools like Jest, Mocha and Chai, AVA , Cypress etc.
* We are using Cypress.

  
### <li>Twilio</li>

# Installation 

Open a Terminal to Install and Run FrontEnd

```bash
cd dashboard
npm i
npm start
```

This will open a new browser window with react running on it.

Open A new Terminal to run backend

```bash
cd Backend
npm i
npm start
```

Also don't forget to add ```.env``` file i=on ```/Backend/``` . It will look like 

```js
MONGOURI=
PORT=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
MONGO_URL=
APP_SECRET=
TWILIO_MESSAGING_SERVICE_SID=
```



# Features Fulfilled

- &#9745; Sign up for a Twilio account and create a new project.

- &#9745; Set up a local development environment. Used NodeJS

- &#9745; Write a script to send reminders via SMS using Twilio's Programmable SMS API. The script should query the database for when patients need to take certain medicines and send a reminder message to the customer's phone number using the Twilio API. The message should include the medicine name and dosage.

- &#9745; Translate the CSV into a more functional database using MongoDB. 

- &#9745; Create a web portal where hospital staff can access the database, add patients, edit medicine and dosage amounts.

- &#9745; Set up a webhook to handle customer responses. When a customer replies to the reminder message, the webhook should update the database with the customer's response. Examples of customer responses can be "Yes" or "My prescription is out."

- &#9745; Add the ability for hospital staff to attribute two different medicines to a patient. If the patient needs to take two different medicines on the same day, they should only receive one message.

- &#9745; Add the ability for hospital staff to attribute up to a dozen different medicines to a patient.

# Future Features and Implementations

- &#9744;  Add Authentication And Authorization 
- &#9744;  Host The WebApp
- &#9744;  Implement ChatBot
