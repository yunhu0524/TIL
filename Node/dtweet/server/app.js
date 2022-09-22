import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import loginRouter from './routes/login.js';
import tweetsRouter from './routes/tweets.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny')); // http://expressjs.com/en/resources/middleware/morgan.html
app.use(helmet()); // https://github.com/helmetjs/helmet

// router
// app.use('/login', loginRouter);
app.use('/tweets', tweetsRouter);

// error
app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((req, res, next,error) =>{
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);