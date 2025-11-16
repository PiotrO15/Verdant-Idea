ServerEvents.recipes(event => {
  event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_obsidian'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})
  event.remove({mod: 'tconstruct', output: '#forge:plates'})
  event.remove({mod: 'tconstruct', output: '#forge:gears'})
  event.remove({mod: 'tconstruct', output: '#forge:wires'})
  event.remove({mod: 'tconstruct', output: '#forge:coins'})

  // Remove skeletons to milk recipes
  event.remove({id: 'tconstruct:smeltery/entity_melting/skeletons'})
  event.remove({id: 'tconstruct:smeltery/entity_melting/heads/skeleton'})

  // Remove pewter (why is this even in the game)
  event.remove({id: 'tconstruct:smeltery/alloys/molten_pewter'})

  // Lava melting
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "minecraft:cobblestone"
    },
    "result": {
      "amount": 250,
      "fluid": "minecraft:lava"
    },
    "temperature": 800,
    "time": 480
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "mysticalagriculture:fire_essence"
    },
    "result": {
      "amount": 250,
      "fluid": "minecraft:lava"
    },
    "temperature": 800,
    "time": 240
  })

  event.remove({id: 'mysticalagriculture:essence/minecraft/lava_bucket'})
})