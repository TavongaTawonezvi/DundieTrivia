const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();


// Connect to the database
async function loadQuestionsCollections() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ttawonezvi13:eGwhbFf9PpFIRvW6@cluster0.gq7ucfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    return client.db('OfficeTrivia').collection('questions');
}

// Get Questions
router.get('/random', async (req, res) => {
    const questions = await loadQuestionsCollections();
    res.send(await questions.find({}).toArray());
})
router.get('/easy', async (req, res) => {
    const questions = await loadQuestionsCollections();
    res.send(await questions.find({'difficulty': 'easy'}).toArray());
})
router.get('/medium', async (req, res) => {
    const questions = await loadQuestionsCollections();
    res.send(await questions.find({'difficulty': 'medium'}).toArray());
})
router.get('/hard', async (req, res) => {
    const questions = await loadQuestionsCollections();
    res.send(await questions.find({'difficulty': 'hard'}).toArray());
})


module.exports = router;