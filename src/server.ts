// eslint-disable-next-line import/no-unresolved
import app from './app';

const PORT = 5190;

app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
