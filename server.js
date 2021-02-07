const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const db = require('./db');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.set('view options', { layout: 'layout' });
app.engine('html', require('hbs').__express);

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css',
  })
);

app.use('/css', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/enter-code', (req, res) => {
  res.render('enter-code');
});

app.post('/enter-code', async (req, res) => {
  const { code } = req.body;

  try {
    await db.checkAndMarkCompleted(code);
    res.render('success');
  } catch (err) {
    res.render('enter-code');
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
