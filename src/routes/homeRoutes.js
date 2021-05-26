const express = require('express');
const router = express.Router()
const HomeCtrl = require('../controllers/homeBuying.js')


router.post('/homes', HomeCtrl.createNewMortgage)
    // retrieve a new bookdetails from req.body

//GET request to /books fetch all books
router.get('/homes', HomeCtrl.fetchMortgage) 
//GET request to /books/:id to fetch specific/single books

router.get('/homes/:id', HomeCtrl.singleMortgage)
   
    router.put('/homes/:id', HomeCtrl.updateSingleMortgage) 

    router.delete('/homes/:id', HomeCtrl.delete) 

    module.exports = router