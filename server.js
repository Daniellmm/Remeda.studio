const path = require('path');
const express = require('express');
const cors = require('cors');
const emailSender = require('./src/send-email');

require('dotenv').config(); // Using the .env configuration for these files

const app = express();

// App use instances
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


// Email sending route
app.post('/send-email', async (req, res) => {
    const { username, email, story } = req.body;
    console.log(req.body);

    try {
        const sentEmail = await emailSender({ username, email, story });
        res.status(200).send(sentEmail);
    } catch (err) {
        res.status(400).send("An error occurred");
    }
});

app.get("*", (req, res) => {
    // Only render 404 if the request is not for an external link
    if (req.originalUrl.startsWith("http")) {
        return; // Let the browser handle the request
    }
    res.render("404.html", { error: "No page" }); // Send the 404 page
});


// Handle 404 for non-existent routes
// app.get("*", (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "./public/404.html")); // Serve the 404.html file
// });

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
