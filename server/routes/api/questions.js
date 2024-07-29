const express = require ('express');
const mongodb = require ('mongodb');
require('dotenv').config();
const router = express.Router();


// Connect to the database (questions collection)
async function loadQuestionsCollections() {
    const client = await mongodb.MongoClient.connect
    (`mongodb+srv://${process.env.MONGO_CON}.gq7ucfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    return client.db('OfficeTrivia').collection('questions');
}
// Connect to the database (recommendedQuestions collection)
async function loadRecommendedQuestionsCollections() {
    const client = await mongodb.MongoClient.connect
    (`mongodb+srv://${process.env.MONGO_CON}.gq7ucfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    return client.db('OfficeTrivia').collection('recommendedQuestions');
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

// Add recommeneded questions to the recommendedQuestions collection
router.post('/users/recommended', async (req, res) => {
    const recommendedQuestions = await loadRecommendedQuestionsCollections();
    await recommendedQuestions.insertOne({
        question: req.body.question,
        answer: req.body.answer,
    }); 
    res.status(201).send();
});
module.exports = router;