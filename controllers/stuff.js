// import Model Thing
const Thing = require('../models/Thing');

// controller to create a new Thing
exports.createThing = (req, res, next) => {
    // Delete the ID sent by the client
    delete req.body._id;
    // Create an instance and receive POST data
    const thing = new Thing({
        ...req.body
    });
    // Save the thing in the DB
    thing.save()
        .then(() => res.status(201).json({ message: 'Object saved successfully!' }))
        .catch(error => res.status(400).json({ error }));
}

// controller to modify a Thing
exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object updated successfully!' }))
        .catch((error) => res.status(400).json({ error }));
}

// controller to delete a Thing
exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object deleted successfully!' }))
        .catch((error) => res.status(400).json({ error }));
}

// controller to get a specific Thing
exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
}

// controller to get all Thing
exports.getAllStuff = (req, res) => {
    // Return things array with the find method
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
}