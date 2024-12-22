const express = require('express'); 
const dotenv = require("dotenv");
const multer = require("multer");
const connectDB = require('./database'); // Import the connection function
const User = require('./models/User');
const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); 

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
      // Create a new user instance
      const newUser = new User({ name, email, password });
      await newUser.save(); // Save the user to the database
      res.send('User registered successfully');
    } catch (err) {
      res.status(500).send('Error registering user');
    }
  });

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 