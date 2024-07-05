const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();

// Get Questions
router.get('/', async (req, res) => {
    const questions = await loadQuestionsCollections();
    res.send(await questions.find({}).toArray());
})


module.exports = router;

async function loadQuestionsCollections() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ttawonezvi13:eGwhbFf9PpFIRvW6@cluster0.gq7ucfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
    { useNewUrlParser: true 
    });

    return client.db('OfficeTrivia').collection('questions');
}