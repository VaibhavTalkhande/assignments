
const Card = require('../models/CardModal')
const router = require('express').Router()


// get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find()
    res.status(200).json(cards)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// post a card
router.post('/', async (req, res) => {
  try {
    const card = await Card.create(req.body)
    res.status(201).json(card)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// delete a card
router.delete('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id)
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// update a card

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const card = await Card.updateOne({_id: id}, req.body)
    res.status(200).json(card)
    }
    
)

module.exports = router