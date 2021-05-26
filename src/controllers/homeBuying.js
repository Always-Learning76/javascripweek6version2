const Home = require('../models/home.js')

exports.createNewMortgage = function(req, res){
        // retrieve a new bookdetails from req.body
        
        Home.create({
        ...req.body
        }, 
        (err, newMortgage) => {
            if(err) { 
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({message: "new mortgage create", newMortgage})
        }
        })
}

exports.fetchMortgage = (req, res) => {
    let conditions = {}
    if(req.query.category) {
        conditions.category = req.query.category
    }
    if(req.query.developer) {
        conditions.developer = req.query.developer
    }
    //check query filters
    console.log(req.query)
    //fetch all books
    Home.find(conditions, (err, home) => {
        if(err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({home})
        }
    })
}


exports.singleMortgage = (req, res) => {
    Home.findOne({_id: req.params.id}, (err, home) => {
        if(err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({home})
        }
    })
}

exports.updateSingleMortgage = (req, res) => {
    Home.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        category: req.body.category
    }, (err, home) => {
        if(err){
            return res.status(500).json({message: err})
        } else if(!home) {
            return res.status(404).json({message: "home not found"})
        } else {
            home.save((err, savedHome)=> {
                if(err) {
                    return res.status(400).json({message: err})
                } else {
                    return res.status(200).json( {message: "home updated successfully"})
                }
            })
        }
    })

}

exports.delete = (req, res) =>{
    Home.findByIdAndDelete(req.params.id, (err, home) => {
        if(err){
            return res.status(500).json({message: err})
        }
        else if(!book) {
            return res.status(404).json({message: 'home not found'})
        }
        else {
            return res.status(200).json({message: 'home deleted'})
        }
    })
}

