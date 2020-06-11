import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes';
import cors from 'cors';
const app = express();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function select(){
    const profiles = await prisma.profile.findMany();

    profiles.forEach(profile => {console.log(profile)});
}
select()
app.use(cors());
app.use(router);

app.listen(3000,'',()=>{console.log('listening')});