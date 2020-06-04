import {Request, Response} from 'express';

const json = {
    'message': 'hi'
};
export default {
    create(req: Request, res: Response){
        return res.json(json);
    }
};