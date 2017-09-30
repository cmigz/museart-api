'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Drawing = models.drawing

const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Drawing.find()
    .then(drawings => res.json({
      drawings: drawings.map((drawing) =>
        drawing.toJSON()
    )
    }))
    .catch(next)
}

const create = (req, res, next) => {
  const drawing = Object.assign(req.body.drawing, {})
  Drawing.create(drawing)
    .then(drawing =>
    res.status(201)
      .json({
        drawing: drawing.toJSON()
      }))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.drawing.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  create,
  destroy
}, {
  before: [
    {method: setModel(Drawing), only: ['destroy']}
  ]
})
