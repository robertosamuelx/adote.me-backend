import {Response, Request} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const json = {
    'message': 'hi'
};

export default {
    login(req: Request, res: Response){
        return res.json(json);
    }
};