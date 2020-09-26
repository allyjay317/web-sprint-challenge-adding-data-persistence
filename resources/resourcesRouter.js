const router = require('express').Router()

const db = require('./resourcesModel')

router.get('/', (req, res) => {
  db.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

router.post('/', verifyResourceSchema, (req, res) => {
  db.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

function verifyResourceSchema(req, res, next) {
  const { name } = req.body
  if (name) {
    next()
  }
  else {
    res.status(400).json({ message: 'Please include a name for your resource' })
  }
}

module.exports = router