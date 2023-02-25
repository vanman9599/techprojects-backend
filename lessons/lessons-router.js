const Lessons = require('../lessons/lessons-model');

const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
     try{
        const lessons = await Lessons.findAll();

        if(lessons){
            res.json(lessons);
        }else{
            res.status(404).json({ message: 'Could not find lessons(s)'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get lessons'})
        
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const lessons = await Lessons.findById(id);

        if(lessons){
            res.json(lessons);
        }else{
            res.status(404).json({ message: 'Could not find lessons with given id'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get lessons'})
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
        const lessons= await Lessons.insert(data);
        res.status(201).json(lessons)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create lessons"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const lessons = await Lessons.findById(id)
    try{
        
        if(lessons){
            const updatedlessons = await Lessons.update(changes, id)
            res.json(updatedlessons);
        }else{
            res.status(404).json({ message: 'Could not find lessons with given Id'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to update lessons' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Lessons.remove(id);
        if(deleted){
          res.json({ removed: deleted })
        }else{
            res.status(404).json({ message: 'Could not find lessons with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;