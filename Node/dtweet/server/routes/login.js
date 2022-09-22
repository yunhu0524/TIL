import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('middleware for login!');
  next();
});

router.get('/', (req, res) => {
  res.status(201).send('GET: /login');
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /login');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /login/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /login/:id');
});

export default router;
