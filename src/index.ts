import express from 'express';
import debug from 'debug';

const log = debug('app:smartschools');

const PORT = 8080;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello',
  });
});

app.listen(PORT, () => {
  log(`Aplicação escutando na porta ${PORT}`);
});
