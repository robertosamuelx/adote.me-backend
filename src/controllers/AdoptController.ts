import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const json = {
    'message': 'hi'
};

export default {
    create(req: Request, res: Response){
        return res.json(json);
    },

    edit(req:Request, res:Response){
        return res.json(json);
    },

    list(req: Request, res: Response){
        return res.json(json);
    },

    show(req: Request, res: Response){
        return res.json(json);
    },

    delete(req: Request, res: Response){
        return res.json(json);
    }
};