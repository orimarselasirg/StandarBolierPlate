const { Router } = require('express')
const router = Router();
const {test} = require('../controllers/test')

router.get('/test', async (req, res) => {
    try {
    console.log('ok')
    res.status(200).json(await test())      
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

module.exports = router
