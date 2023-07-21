const router = require('express').Router()

router.get('/', (req, res) => {
  const portfolio = ['a', 'b', 'c'];
  res.json(portfolio);
});

module.exports = router;
