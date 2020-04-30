import express from 'express';

const app = express();
const PORT = process.env.PORT || '4000';

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

app.listen(PORT, () => {
  console.log('conectado al puerto:', PORT);
});
