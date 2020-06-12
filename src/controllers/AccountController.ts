import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {

    async create(req:Request, res:Response){

        const account = await prisma.account.create({
            data: {
                login:  req.body.email,
                password: req.body.password,
                Profile: {
                    create: {
                        email: req.body.email,
                        name: req.body.name
                    }
                }
            }
        });

        return res.status(200).json({'id':account.id});
    },
    async list(req: Request, res: Response){
        const profiles = await prisma.account.findMany();

        return res.json(profiles);
    },

    async delete(req: Request, res: Response){ //não ta funfando
        const {count} = await prisma.account.deleteMany({});

        return res.json({count});
    }
};