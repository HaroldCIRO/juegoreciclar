sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    Botella.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(10)
    music.pewPew.play()
    Botella.say("10 Puntos!")
    Kingo.startEffect(effects.fire)
    animation.runMovementAnimation(
    Kingo,
    animation.animationPresets(animation.bobbing),
    1000,
    false
    )
})
let Botella: Sprite = null
let Kingo: Sprite = null
scene.setBackgroundColor(5)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010202010202020202020202010101020202020102020202020202020101010202020201020202020202020201010102020202010202020202020202010101020202020102020202020202020101010202020201020202020202020201010102020202010202020202020202010101020202020102020202020202020101010202020201010101010101010101010102020202010101010101010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.brick], TileScale.Sixteen))
Kingo = sprites.create(img`
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f 2 2 f 2 2 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . f f . f f 5 f f . f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Kingo, 100, 100)
Botella = sprites.create(img`
    . . . . . . . . . 5 . . . . . . 
    . . . . . . . . 5 . 5 . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f 5 5 3 f . . . . . . 
    . . . . . f 3 5 5 f . . . . . . 
    . . . . . f 5 5 3 f . . . . . . 
    . . . . . f 5 3 5 f . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . . f 3 5 3 f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
