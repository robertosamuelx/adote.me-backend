import {Response, Request} from 'express';
const json = {
    'message': 'hi'
};

export default {
    login(req: Request, res: Response){
        return res.json(json);
    }
};