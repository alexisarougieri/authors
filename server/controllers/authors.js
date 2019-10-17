const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    index: function (req, res) { // view all authors
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    details: function (req, res) { // view details of an author
        Author.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    addAuthor: function (req, res) { // add an author
        Author.create(req.body)
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ message: 'fail', err: err }))
    },
    editAuthor: function (req, res) { // edit an author
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true }) // needs req.body to update the body
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ message: 'fail', err: err }))
    },
    deleteAuthor: function (req, res) { // delete an author
        Author.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
