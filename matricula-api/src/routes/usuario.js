import express from 'express';

import controller from '../controllers/usuario.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create); 
router.put('/', controller.update);
router.delete('/:id', controller.remove);
router.post('/login', controller.authenticate);

export default router;