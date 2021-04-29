scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy()
    if (mySprite.x == wróg) {
        mySprite.vy = -200
    } else {
        info.changeLifeBy(-1)
    }
    game.over(false)
})
let wróg = 0
let mySprite: Sprite = null
scene.setBackgroundColor(4)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`robert`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    wróg = sprites.create(assets.image`mimi`, SpriteKind.Player)
    tiles.placeOnRandomTile(wróg, assets.tile`myTile0`)
    wróg.follow(mySprite, 40)
}
