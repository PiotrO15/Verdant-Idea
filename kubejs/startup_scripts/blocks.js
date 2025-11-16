BlockEvents.modification(event => {
  event.modify('minecraft:end_portal_frame', block => {
    block.destroySpeed = 30
    block.requiresTool = true
  })
})

StartupEvents.registry('block', event => {
  event.create('steel_wall', 'wall')
    .soundType('metal')
    .mapColor('metal')
    .hardness(3.0)
    .resistance(15.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .textureAll('immersiveengineering:block/metal/storage_steel')
})