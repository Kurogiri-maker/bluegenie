const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const questionSchema = new mongoose.Schema({
    id : Number,
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
});

const Question = mongoose.model('Question',questionSchema);

//Create a question
async function createQuestion(req){

    const question = new Question({ 
        id: req.body.id,
        description: req.body.description,
        alternatives: req.body.alternatives
    })
    
    const result = await question.save();
    console.log(result);
}

//Get all questions
async function getQuestion(){
    const questions = await Question
        .find()
    console.log(questions);
}

//Get a question by its Id
async function getQuestionById(i){
    const question= await Question
        .findById({_id: i})
    if(!question) {
        console.log('The question with the given ID was not found');
    }
    
       
        return question;
    
}

//getQuestionById(2);

//Update a question
async function updateQuestion(req) {
    const question = await Question.findByIdAndUpdate(req.params.id, {
       
        id:req.body.id,
        description : req.body.description,
        alternatives: req.body.alternatives,  
    });
    
    return question;
}

//Remove a question
async function removeQuestion(req) {
    //const result = await Question.deleteMany({_id: id});
    const question = await Question.findByIdAndRemove(parseInt(req.params.id));
    return question;
}

router.post('/', (req, res)=> {
    
    try {
        // const  description  = req.body.description;
        // const  alternatives  = req.body.alternatives;

        const question = createQuestion(req);

        return res.status(201).json(question);

    } catch (error) {
        console.log(error);
        return res.status(404).json({"error":error})
    }
});

router.get('/',async (req,res)=> {
    const questions = await Question
        .find()
    console.log(questions);
    return res.status(201).send(questions);
})

router.get('/:id',async(req,res)=> {
    const question = await Question
    .findById({_id: req.params.id})
    console.log(question);
    if(!question) res.status(404).send('The question with the given ID was not found');//404
    
    res.send({data : question});
})

router.put('/:id',async (req,res)=> {
    const question = updateQuestion(req);
    console.log(question);
    res.send(question);
});

router.delete('/:id',async(req,res)=> {
    const question = await Question.findByIdAndRemove(req.params.id);
    console.log(question);
    res.send(question);
});


module.exports = router


//Testing

// "id": 2,
// "description":'What is the language used in Arduino ide ?',
// "alternatives": [
//     {
//         text: "Python"
//     },
//     {
//         text: "Java"
//     },
//     {
//         text: "C",
//         isCorrect:true
//     },
//     {
//         text: "C#"
//     }
// ]
