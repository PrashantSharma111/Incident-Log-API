# **HumanChain AI Safety Incident Log API**

Welcome to the **HumanChain AI Safety Incident Log API**! This API allows you to track AI-related incidents, log details, and manage incidents efficiently.

---

## 🚀 **Tech Stack**
This project is built using the following technologies:

- **Node.js** - Runtime for JavaScript server-side logic
- **Express.js** - Web framework for building APIs
- **MongoDB** - NoSQL database for storing incident data
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB

---

## 🛠 **Setup Instructions**

```bash
1. Clone the Repository
First, clone this repository to your local machine using the following command:

git clone <your-repo-url>
cd incident-log-api

---

2. Install Dependencies
npm install

---

3. Setup Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_uri_here


---

4. Run the Sever
npm run dev
The server will now be running at http://localhost:8000.

```

###📚 API Endpoints

```bash
1. GET /incidents - Get all incidents
Fetches a list of all incidents stored in the database.

Method: GET

URL: http://localhost:8000/incidents

2. POST /incidents - Create a new incident
Create a new incident by providing incident details.

Method: POST

URL: http://localhost:8000/incidents

Body (JSON):

{
  "title": "AI Misbehavior",
  "description": "AI made an incorrect decision",
  "severity": "High"
}

3. GET /incidents/:id - Get a single incident by ID
Retrieve a single incident using its unique ID.

Method: GET

URL: http://localhost:8000/incidents/:id

Replace :id with the actual incident ID.

4. DELETE /incidents/:id - Delete an incident by ID
Delete a specific incident by its ID.

Method: DELETE

URL: http://localhost:8000/incidents/:id

Replace :id with the actual incident ID.


```
---

###🧑‍💻 Using Postman to Test the API

```bash

1. Get All Incidents
Open Postman and select GET as the request method.

Enter the URL http://localhost:8000/incidents.

Hit Send. This will fetch all incidents from the server.

2. Create an Incident
Open Postman and select POST as the request method.

Enter the URL http://localhost:8000/incidents.

Go to the Body tab and select raw.

Choose JSON from the dropdown on the right.

Enter the following JSON in the body:

{
  "title": "AI Misbehavior",
  "description": "AI made an incorrect decision",
  "severity": "High"
}
Hit Send to create the new incident.

3. Get a Single Incident by ID
Open Postman and select GET as the request method.

Enter the URL http://localhost:8000/incidents/<id>, replacing <id> with the actual incident ID.

Hit Send to retrieve the specific incident.

4. Delete an Incident
Open Postman and select DELETE as the request method.

Enter the URL http://localhost:8000/incidents/<id>, replacing <id> with the actual incident ID.

Hit Send to delete the incident.

```

---

###📝 Insert Sample Data

```bash
To populate your database with sample incidents, use the POST request as shown in the Create an Incident example above. This will create a new incident and store it in the database.

⚙️ Database Setup & Configuration
1. MongoDB Database Setup
Make sure you have MongoDB set up and running. You can use MongoDB Atlas for cloud hosting or install MongoDB locally on your system.

2. Configure the Database Connection
You need to provide your MongoDB URI to connect to the database.

Ensure that the URI is placed in the .env file under the MONGO_URI variable.

Example MongoDB URI:

Local MongoDB:

MONGO_URI=mongodb://localhost:27017/incidents
MongoDB Atlas:

MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/incidents?retryWrites=true&w=majority

📖 Design Decisions & Challenges
Incident Data Structure: The incidents are stored with the following fields: title, description, severity, and reportedAt. The severity is restricted to three options: Low, Medium, and High.

Error Handling: All endpoints include error handling to respond with a proper message when issues arise, such as missing required fields or failed database connections.

```

---

###📦 Project Structure
Here’s the structure of the project:

incident-log-api/
├── controllers/
│   └── incidentController.js    # Logic for handling API requests
├── models/
│   └── Incident.js              # Mongoose model for the incidents
├── config/
│   └── db.js                    # MongoDB connection setup
├── .env                          # Environment variables
├── .env.                         # .env file
├── server.js                     # Main entry point for the application
├── package.json                  # Project dependencies and scripts
└── README.md                     # Documentation for the project

---

💡 Final Thoughts
This API is a simple yet powerful tool for tracking incidents related to AI safety. The robust setup allows for easy integration and extension, making it a great starting point for more advanced incident tracking systems.





