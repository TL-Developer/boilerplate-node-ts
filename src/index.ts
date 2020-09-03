import express from 'express';

const PORT = 8080;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello',
  });
});

app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
