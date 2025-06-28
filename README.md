#  To-Do List API

A simple **RESTful API** built with **Node.js**, **Express**, and **MongoDB** that allows users to create, read, update, and delete to-do tasks.

---

##  Features

- Add a new task   
- Get all tasks    
- Delete a task   
- MongoDB integration   
- Clean code structure

---

##  Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Postman (API Testing)

---

##  Project Structure

```
todo_list_api/
│
├── index.js           # Entry point (server setup)
├── db.js              # MongoDB connection
│
├── models/
│   └── Task.js        # Mongoose schema/model for tasks
│
├── routes/
│   └── tasks.js       # Task-related API routes (CRUD)
```

---

##  How to Run

1. Clone the repo:
```bash
git clone https://github.com/yourusername/todo-list-api.git
cd todo-list-api
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB server (if not already running):
```bash
mongod
```

4. Run the server:
```bash
node index.js
```

> Server will run on: `http://localhost:3000`

---

##  API Endpoints

| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| GET    | `/api/tasks`        | Get all tasks      |
| POST   | `/api/tasks`        | Create new task    |
| PUT    | `/api/tasks/:id`    | Update task by ID  |
| DELETE | `/api/tasks/:id`    | Delete task by ID  |

---

##  Example Request Body

```json
{
  "title": "Study Node.js"
}
```

---

##  How to Use the API

1. Open [Postman](https://www.postman.com/).
2. Test GET: `http://localhost:3000/api/tasks` to view all tasks.
3. Test POST with JSON body:
```json
{
  "title": "Finish backend project"
}
```
4. Use PUT to update a task by ID, and DELETE to remove a task.

---

##  Author

**Mahmoud Emad Sallam**   
Back-End Developer (Node.js)  
GitHub: (https://github.com/MahmoudSallamm)
