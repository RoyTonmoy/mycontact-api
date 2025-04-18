MyContact API
Overview
MyContact API is a RESTful API built with Node.js, Express, and MongoDB for managing contacts. It provides endpoints for creating, reading, updating, and deleting contact information, with user authentication to secure access. The API uses JSON Web Tokens (JWT) for authentication and MongoDB as the database to store contact data.
Features

User Authentication: Register and login users with JWT-based authentication.
CRUD Operations: Create, read, update, and delete contacts.
Secure Routes: Protected routes to ensure only authenticated users can access contact data.
MongoDB Integration: Persistent storage for contacts and user data.
Environment Configuration: Uses .env for managing sensitive data like database URI and JWT secret.

Prerequisites

Node.js (v14 or higher)
MongoDB (local or cloud instance like MongoDB Atlas)
npm (Node Package Manager)

Installation

Clone the repository:
git clone https://github.com/RoyTonmoy/mycontact-api.git
cd mycontact-api


Install dependencies:
npm install


Set up environment variables:Create a .env file in the root directory and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Run the application:
npm start

The server will start on http://localhost:5000 (or the port specified in .env).


API Endpoints
Authentication

POST /api/users/register: Register a new user
Body: { "name": "string", "email": "string", "password": "string" }


POST /api/users/login: Login a user and return a JWT
Body: { "email": "string", "password": "string" }



Contacts

GET /api/contacts: Retrieve all contacts for the authenticated user
POST /api/contacts: Create a new contact
Body: { "name": "string", "email": "string", "phone": "string" }


GET /api/contacts/:id: Retrieve a specific contact by ID
PUT /api/contacts/:id: Update a contact by ID
Body: { "name": "string", "email": "string", "phone": "string" }


DELETE /api/contacts/:id: Delete a contact by ID

Note: All contact endpoints require a valid JWT in the Authorization header as Bearer <token>.
Project Structure
mycontact-api/
├── controllers/      # Request handlers for routes
├── middleware/       # Custom middleware (e.g., auth, error handling)
├── models/           # Mongoose schemas for User and Contact
├── routes/           # Express route definitions
├── .env              # Environment variables (not committed)
├── server.js         # Main server setup
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation

Dependencies

express: Web framework for Node.js
mongoose: MongoDB object modeling
jsonwebtoken: JWT for authentication
bcryptjs: Password hashing
dotenv: Environment variable management

Testing the API
You can test the API using tools like Postman or cURL. Example request:
curl -X GET http://localhost:5000/api/contacts \
-H "Authorization: Bearer your_jwt_token"

Contributing

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Create a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, reach out to RoyTonmoy.
