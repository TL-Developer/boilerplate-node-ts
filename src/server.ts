import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Helloooooo',
  });
});

app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});

export default app;
