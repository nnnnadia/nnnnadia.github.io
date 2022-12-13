import express from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});