
const router = require('express').Router();
const Resources = require('./resources-model');

router.get('/', (req,res)=>{
    Resources.all()
        .then(resources=>res.status(200).json(resources))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message:'error in server'});
        })
})

router.post('/', (req,res)=>{
    Resources.add(req.body)
        .then(resources=>res.status(201).json(resources))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message:'error in server'});
        })
})

router.delete('/:id', (req,res)=>{
    Resources.remove(req.params.id)
        .then(resource=>
            resource
            ? 
            res.status(200).json(resource)
            : 
            res.status(404).json({message: 'product with given id does not exist'}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message:'error in server'});
        })
})

module.exports=router;
