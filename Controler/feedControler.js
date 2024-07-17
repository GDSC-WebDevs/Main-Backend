
const feedModel = require('../database/Models/feedModel');
async function sendfeedback(req, res) {
    try {
        let data = await req.body
        const newfeed = await new feedModel(data)
        await newfeed.save()
        res.json(newfeed)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendfeedback }