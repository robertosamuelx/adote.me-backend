import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes';
import cors from 'cors';
const app = express();

app.use(cors({
    allowedHeaders: "*",
    exposedHeaders: "*",
    methods: "*"
}));
app.use(router);

app.listen(3000,'',()=>{console.log('The server has been started')});