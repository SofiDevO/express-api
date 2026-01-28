dotenv.config();
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.ts';

const app = express() as express.Application;
const PORT = process.env.PORT || 3000 ;

app.use('/', routes()) ;

app.listen(PORT);

console.log(`Server is running on port ${PORT}`);