import express from 'express';
import cors from 'cors';
import router from './routes/route.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
