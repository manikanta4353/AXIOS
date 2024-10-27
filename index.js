const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'This is my home route !', data: { name: 'Manikanta', projectname: 'Axios' } });
});

app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About route!', info: 'This is the about page data' });
});

app.get('/contact', (req, res) => {
    res.json({ message: 'Welcome to the Contact route!', info: '9505859669', email:"manikanta07@gmail.com" });
  });

  app.get('/projects', (req, res) => {
    res.json({ title: 'Axios Project', desription: 'This is an axios dummy project.' });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
