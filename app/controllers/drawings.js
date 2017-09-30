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

const update = (req, res, next) => {
  Drawing.findOne({
    _id: req.params.id
    // token: req.user.token
  }).then(drawing => {
    drawing.imageLink = req.body.drawing.imageLink
    drawing.songTitle = req.body.drawing.songTitle
    drawing.songArtist = req.body.drawing.songArtist
    drawing.lyrics = req.body.drawing.lyrics
    drawing.songLink = req.body.drawing.songLink
    return drawing.save()
  }).then((drawing) =>
  res.sendStatus(200)
).catch(next)
}

// Working with just updating songTitle
// const update = (req, res, next) => {
//   Drawing.findOne({
//     _id: req.params.id
//     // token: req.user.token
//   }).then(drawing => {
//     drawing.songTitle = req.body.drawing.songTitle
//     return drawing.save()
//   }).then((drawing) =>
//   res.sendStatus(200)
// ).catch(next)
// }

module.exports = controller({
  index,
  create,
  destroy,
  userDrawings,
  update
}, {
  before: [
    {method: setModel(Drawing), only: ['destroy']}
  ]
})
