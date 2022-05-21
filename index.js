const express = require('express')
const app = express()
const { Article } = require("./models")

app.use(express.json())

app.get('/articles', async (req, res) => {
    const articles = await Article.findAll()

    res.status(200).send(articles)
})

// app.get('/articles', (req, res) => {
//     Article.findAll().then(articles => {
//         res.status(200).send(articles)
//     })
// })

app.get('/articles/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    }).then(article => {
        res.status(200).send(article)
    })
})

app.post('/articles', (req, res) => {
    Article.create({
        "tittle": req.body.tittle,
        "body": req.body.body,
        "approved": req.body.approved
    }).then(article => {
        return res.status(201).send(article)
    })
})

app.put('/articles/:id', (req, res) => {
    Article.update({
        "tittle": req.body.tittle,
        "body": req.body.body,
        "approved": req.body.approved
    }, {
        where: { id: req.params.id }
    }).then(article => {
        res.status(201).send({
            "status": "ok",
            "message": "berhasil"
        })
    })
})

app.delete('/articles/:id', (req, res) => {
    Article.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.send({
            "status": "ok",
            "message": "data berhasil dihapus"
        })
    })
})

app.listen(3000, () => {
    console.log('server is running ...')
})