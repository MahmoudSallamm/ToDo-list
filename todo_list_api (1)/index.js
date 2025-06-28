const express = require('express');
const app = express();
require('./db'); // MongoDB connection

app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('To-Do List API running on http://localhost:3000');
});
