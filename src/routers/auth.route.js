import express from 'express';

const router = express.Router();

router.get('/sign-up', (req, res) => {
  res.send('POST /api/auth/sign-up response');
});

router.get('/sign-in', (req, res) => {
  res.send('POST /api/auth/sign-in response');
});

router.get('/sign-out', (req, res) => {
  res.send('POST /api/auth/sign-out response');
});

export default router;
