# VE3taskmanegerapi-

# Task Management API

A powerful REST API for managing tasks with user authentication. Built with Node.js, Express, and MongoDB.

## 🚀 Features

- User authentication (register/login)
- Create, read, update, and delete tasks
- Task status management (pending/in progress/completed)
- Pagination for task listings
- API documentation with Swagger
- JWT-based authentication
- Input validation
- Error handling

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Validator
- Swagger UI for API documentation

## 🏃‍♂️ Quick Start

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables in `.env`:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## 📚 API Documentation

Access the API documentation at `http://localhost:3000/api-docs` after starting the server.

### Authentication

1. Register a new user:
   ```http
   POST /api/auth/register
   {
     "email": "user@example.com",
     "password": "password123"
   }
   ```

2. Login:
   ```http
   POST /api/auth/login
   {
     "email": "user@example.com",
     "password": "password123"
   }
   ```

### Tasks

All task endpoints require authentication. Add the JWT token in the Authorization header:
```http
Authorization: Bearer your_jwt_token
```

Available endpoints:
- `GET /api/tasks` - Get all tasks (with pagination)
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

Example task creation:
```http
POST /api/tasks
{
  "title": "Complete project",
  "description": "Finish the API documentation",
  "status": "in_progress"
}
```

## 📝 Task Status

Tasks can have one of three statuses:
- `pending` (default)
- `in_progress`
- `completed`

## 🔒 Security

- Password hashing using bcrypt
- JWT-based authentication
- Input validation and sanitization
- MongoDB injection protection
- Security headers with helmet

## ⚡ Error Handling

The API provides clear error messages for:
- Invalid input
- Authentication failures
- Not found resources
- Server errors
