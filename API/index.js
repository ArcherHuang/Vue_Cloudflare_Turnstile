const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  } else {

    if (username === 'user01' && password === 'qwer168') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Login Fail' });
    }
  }

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
