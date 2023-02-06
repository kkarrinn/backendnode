const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get('/greeting', (req, res) => {
  console.log(req.query);
  res.render('greeting.njk', {
    name: req.query.name,
    age: req.query.age    
  });
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('about.njk');
}) 

app.get('/gallery', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('gallery.njk');
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('contact.njk');
})

app.get('/values', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));
  res.render('values.njk');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


