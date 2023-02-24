const Curriculum = require('../curriculum/curriculum-model');

const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
     try{
        const curriculum = await Curriculum.findAll();

        if(curriculum){
            res.json(curriculum);
        }else{
            res.status(404).json({ message: 'Could not find curriculum(s)'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get curriculum'})
        
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const curriculum = await Curriculum.findById(id);

        if(curriculum){
            res.json(curriculum);
        }else{
            res.status(404).json({ message: 'Could not find curriculum with given id'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get curriculum'})
    }
})

// //send in parentId to get array of children of parent
// router.get('/children/:id', async (req, res) => {
//     const { id } = req.params;
//     try{
//         const children = await Parents.findChildren(id);

//         if(children){
//             res.json(children);
//         }else{
//             res.status(404).json({ message: 'Could not find childen with given id'})
//         }

//     }catch(err){
        
//         res.status(500).json({ message: 'failed to get children'})
//     }
// })

router.post('/', async (req,res) => {
    const data = req.body;
    
    try{
        const curriculum= await Curriculum.insert(data);
        res.status(201).json(curriculum)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create curriculum"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const curriculum = await Curriculum.findById(id); //TODO Implment this function
        if(curriculum){
            const updatedcurriculum = await Curriculum.update(changes, id)
            res.json(updatedcurriculum);
        }else{
            res.status(404).json({ message: 'Could not find curriculum with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update curriculum' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Curriculum.remove(id);
        if(deleted){
          res.json({ removed: deleted })
        }else{
            res.status(404).json({ message: 'Could not find curriculum with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;