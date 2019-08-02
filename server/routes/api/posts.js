const express = require('express');
const mongodb = require('mongodb');

// load router
const router = express.Router();

// load collection
async function loadCollection(collection) {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:35001', {useNewUrlParser: true});
    const db = client.db('entcrowd');
    return db.collection(collection);
}

router.get('/', async (req, res) => {
    const collection = await loadCollection('data.users');
    res.send(await collection.find({"profile.email" : "justchanho@naver.com"}).toArray());
});

module.exports = router;