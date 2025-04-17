import express from 'express';
import route from './Routes/index';

const app = express();
app.use(express.json());

route(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});