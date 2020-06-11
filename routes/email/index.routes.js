

module.exports = app => {
    app.post('/email', (req,res) => {
        console.log(req.body)
        res.json("all g")
    });
}