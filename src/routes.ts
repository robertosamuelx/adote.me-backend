import express from 'express';

const router = express.Router();

const json = {
    'message': 'hi'
};

router.post('/account', (req, res) => { //criando conta
    return res.json(json);
});

router.post('/login', (req, res) => { //login
    return res.json(json);
});

router.get('/events', (req, res) => { //eventos que estou participando
    return res.json(json);
});

router.put('/events', (req, res) => { //criando evento
    return res.json(json);
});

router.delete('/events/:id', (req, res) => { //apagando evento se eu for organizador
    return res.json(json);
});

router.post('/events', (req, res) => { //atualizando evento
    return res.json(json);
});

router.post('/events/:id', (req, res) => { //entrando num evento
    return res.json(json);
});

export default router;