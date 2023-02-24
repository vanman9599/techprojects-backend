const Courses = require('../courses/courses-model');

const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
     try{
        const courses = await Courses.findAll();

        if(courses){
            res.json(courses);
        }else{
            res.status(404).json({ message: 'Could not find courses(s)'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get courses'})
        
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const courses = await Courses.findById(id);

        if(courses){
            res.json(courses);
        }else{
            res.status(404).json({ message: 'Could not find courses with given id'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get courses'})
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
        const courses= await Courses.insert(data);
        res.status(201).json(courses)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create courses"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const courses = await Courses.findById(id)
    try{
        
        if(courses){
            const updatedcourses = await Courses.update(changes, id)
            res.json(updatedcourses);
        }else{
            res.status(404).json({ message: 'Could not find courses with given Id'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to update courses' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Courses.remove(id);
        if(deleted){
          res.json({ removed: deleted })
        }else{
            res.status(404).json({ message: 'Could not find courses with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;