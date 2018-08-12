const fs = require('fs')
const yaml = require('js-yaml')

const prefix = yaml.safeLoad(fs.readFileSync('./words/prefix.yml'))
const roomNoun = yaml.safeLoad(fs.readFileSync('./words/roomNoun.yml'))
const adjective = yaml.safeLoad(fs.readFileSync('./words/adjective.yml'))
const playerNoun = yaml.safeLoad(fs.readFileSync('./words/playerNoun.yml'))
const illumination = yaml.safeLoad(fs.readFileSync('./words/illumination.yml'))

function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

class FunStringGenerator {

  get room() {
    return `${this.randomIllumination()}-${this.randomRoom()}`
  }

  get player() {
    return `${this.randomPrefix()}-${this.randomAdjective()}-${this.randomPlayerNoun()}`
  }

  randomPrefix() {
    return prefix[randomInt(0, prefix.length-1)]
  }

  randomAdjective() {
    return adjective[randomInt(0, adjective.length-1)]
  }

  randomPlayerNoun() {
    return playerNoun[randomInt(0, playerNoun.length-1)]
  }

  randomIllumination() {
    return illumination[randomInt(0, illumination.length-1)]
  }

  randomRoom() {
    return roomNoun[randomInt(0, roomNoun.length-1)]
  }
}

module.exports = new FunStringGenerator()