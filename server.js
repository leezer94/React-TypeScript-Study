const express = require('express');
const app = express();

// download ejs for view engine
// middleware need to be placed at the top

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', logger, (req, res) => {
  res.render('index', { text: 'World' });
});

const userRouter = require('./src/server/routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(8080, () => {
  console.log('listening on 8080');
});
