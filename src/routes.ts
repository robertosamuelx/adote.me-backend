import express from 'express';

const router = express.Router();
import AdoptController from './controllers/AdoptController';
import LoginController from './controllers/LoginController';
import AccountController from './controllers/AccountController';

router.post('/account', AccountController.create); //criando conta
router.get('/accounts', AccountController.list); //listando contas
router.delete('/accounts/', AccountController.delete);

router.post('/login', LoginController.login); //login


router.get('/adopts', AdoptController.list); //adoções disponíveis


router.put('/adopts', AdoptController.create); //criando adoção

router.delete('/adopts/:id', AdoptController.delete); //apagando uma adoção

export default router;