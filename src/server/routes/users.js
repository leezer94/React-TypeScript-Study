const express = require('express');
const router = express.Router();

// Reads Top to Bottom

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  console.log(req.query.name);
  res.render('users/new', { firstName: 'Test' });
});

router.post('/', (req, res) => {
  const isValid = false;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send('HI');
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

const users = [{ name: 'keonhee' }, { name: 'ronja' }];

router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
