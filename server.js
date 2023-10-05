import express from 'express';
import router from './routes/index';

const port = parseInt(process.env.PORT, 10) || 5000;

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(port,'0.0.0.0', () => {
  console.log(`server running on port http://0.0.0.0:${port}`);
});

export default app;
