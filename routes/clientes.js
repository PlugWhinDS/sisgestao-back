const express=require('express');
const router=express.Router();
const clientesController=require('../controllers/clientes')
router.get('/',clientesController.index);
router.post('/',clientesController.store);
router.put('/:id',clientesController.update);
router.delete('/:id',clientesController.destroy);
module.exports=router;