import {Request, Response} from 'express';
const json = {
    'message': 'hi'
};

export default {
    create(req: Request, res: Response){
        return res.json(json);
    },

    list(req: Request, res: Response){
        return res.json(json);
    },

    delete(req: Request, res: Response){
        return res.json(json);
    }
};