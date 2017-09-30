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

const userDrawings = (req, res, next) => {
  Drawing.find({
    userId: req.params.userId
    // token: req.user.token
  })
  .then(drawings => res.json({
    drawings: drawings.map((drawing) =>
      drawing.toJSON()
  )
  }))
}

// --- Working userDrawings
// Gets user drawings but cant rean token
// const userDrawings = (req, res, next) => {
//   Drawing.find({
//     userId: req.params.userId
//     // token: req.user.token
//   })
//   .then(drawings => res.json({
//     drawings: drawings.map((drawing) =>
//       drawing.toJSON()
//   )
//   }))
// }
// ---

module.exports = controller({
  index,
  create,
  destroy,
  userDrawings
}, {
  before: [
    {method: setModel(Drawing), only: ['destroy']}
  ]
})
