const Cliente=require('../models').Cliente;
const index=(req,res)=>{
    Cliente
    .findAll()
    .then( clientes=>res.json({data:clientes,error:false}))
    .catch(error=>res.json({error:true,message:'Erro ao listar os clientes.'}))
}
const store=(req,res)=>{
    Cliente
    .create(req.body)
    .then(cliente=>res.json({data:cliente,error:false}))
    .catch(error=>res.json({message:'Erro ao inserir cliente',error:true}))
}
const update=(req,res)=>{
    Cliente
    .update(req.body,{where:{id:req.params.id}})
    .then(result=>res.json({message:'Cliente atualizado com sucesso.',error:false}))
    .catch(error=>res.json({message:'Erro ao atualizar cliente',error:true}))
}
const destroy=(req,res)=>{
    Cliente
    .destroy({where:{id:req.params.id}})
    .then(result=>res.json({message:'Cliente excluído com sucesso.',erro:false}))
    .catch(error=>res.json({message:'Erro ao excluir cliente.',error:true}))
}
module.exports={
    index,
    store,
    update,
    destroy
}
    