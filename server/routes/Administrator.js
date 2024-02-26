const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jswtoken = require('jsonwebtoken')
const { Administrator } = require('../models')

router.post("/login", async (req, res) => {
    const post = req.body

    try {
        let administrator = await Administrator.findOne({
            where: {
                email: post.email
            }
        })
        
        if(!administrator) {
            return res.json({
                msg: "Administrateur introuvable",
                err: true
            })
        } else {
            let isMatch = await bcrypt.compare(post.password ,administrator.password)

            if(!isMatch) {
                return res.json({
                    msg: "Les mots de passes ne correspondent pas",
                    err: true
                })
            } else {
                const token = jswtoken.sign(
                    { userId: administrator.id},
                    'secret',
                    { expiresIn: '24h'}
                )
                return res.json({
                    err: false,
                    token: token
                })
            }
        }
    } catch (error) {
        console.log(error)
    }

})

router.post("/create", async (req, res) => {
    const post = req.body
    Administrator.create(post)
    res.json(post)
})
module.exports = router
