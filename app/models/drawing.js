'use strict'

const mongoose = require('mongoose')

const DrawingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  songTitle: {
    type: String,
    required: true
  },
  songArtist: {
    type: String,
    required: true
  },
  songLink: {
    type: String,
    'default': 'None Provided'
  },
  lyrics: {
    type: String,
    'default': 'None Provided'
  }
}, {
  timestamps: true
}
)

const Drawing = mongoose.model('Drawing', DrawingSchema)

module.exports = Drawing
