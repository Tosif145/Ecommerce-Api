# eCommerce App API Documentation
## Introduction
The eCommerce Api buit using Node.js, MongoDb. Using this api u can perform CRUD operation on both Products and Variants with Postman 

### CURD operations with Postman
#### creating/adding product to database

# screen shots

![adding patinets information](screenshots/AddPatient.png)

![Patients List/ Dashboard](screenshots/PatientsDashboard.png)

![Reminded / sent messages](screenshots/ReminderMessages.png)


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
