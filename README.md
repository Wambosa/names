# names
simple readable token generation for game servers


### usage example

package.json
```
...
  "dependencies": {
    "names": "github:wambosa/names#master",
   }
...
```

server.js
```
const name = require('names')
const Game = ...

let game = new Game({
  name: name.room
})

let player1 = new Player({
  name: name.player
})

let player2 = new Player({
  name: name.player
})
```