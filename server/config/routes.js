// require controllers
let authors = require('./../controllers/authors');

module.exports = function (app) {
    app.get("/authors", authors.index)
    app.get("/details/:id", authors.details)
    app.post("/add", authors.addAuthor)
    app.put("/authors/:id", authors.editAuthor)
    app.delete("/delete/:id", authors.deleteAuthor)

}