// eslint-disable-next-line import/no-unresolved
import './utils/module-alias';
// eslint-disable-next-line import/no-unresolved
import app from '@src/app';

const PORT = 5190;

app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
