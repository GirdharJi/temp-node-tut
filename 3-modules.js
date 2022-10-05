// CommonJS, every file is module (by default)
// Modules - encapulated Code (only share minimum)

const names = require('./4-names')
const say = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

say('Kartik')
say(names.john)
say(names.peter)