import express from 'express';

const router = express.Router();
import AdoptController from './controllers/AdoptController';
import LoginController from './controllers/LoginController';
import AccountController from './controllers/AccountController';

router.put('/account', AccountController.create); //criando conta
router.post('/account/:id', AccountController.edit) //editando uma conta
router.delete('/account/:id', AccountController.delete); //apagando conta
router.get('/accounts', AccountController.list); //listando contas --STAFF ROUTE

router.post('/login', LoginController.login); //login

router.get('/adopts', AdoptController.list); //exibindo adoções disponíveis

router.put('/adopt', AdoptController.create); //criando adoção
router.get('/adopt/:id', AdoptController.show); //exibindo uma adoção
router.post('/adopt/:id', AdoptController.edit); //editando adoção
router.delete('/adopt/:id', AdoptController.delete); //apagando uma adoção

export default router;