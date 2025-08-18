ServerEvents.tags('fluid', event => {
  event.add('wasteland:empowered_biodiesel', ['kubejs:empowered_biodiesel'])
})

ServerEvents.recipes(event => {
  event.replaceInput({mod: 'actuallyadditions'}, 'actuallyadditions:iron_casing', 'thermal:machine_frame')

  event.custom({
    "type": "thermal:pyrolyzer",
    "ingredient": {
      "item": "minecraft:quartz"
    },
    "result": [
      {
        "item": "actuallyadditions:black_quartz"
      }
    ],
    "experience": 0.15,
    "energy": 1000
  })

  event.replaceInput({id: 'actuallyadditions:atomic_reconstructor'}, 'minecraft:redstone', 'actuallyadditions:black_quartz')

  const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]
  
  colors.forEach(color => {
    event.shaped(`actuallyadditions:lamp_${color}`,
      [
        'GPG',
        'DBD',
        'GPG'
      ],
      {
        B: 'actuallyadditions:black_quartz',
        D: `#forge:dyes/${color}`,
        G: 'minecraft:glowstone',
        P: 'actuallyadditions:palis_crystal'
      }
    )
  })

  event.remove({id: 'actuallyadditions:empowering/palis'})
  event.custom({
    "type": "actuallyadditions:empowering",
    "base": {
      "item": "actuallyadditions:palis_crystal"
    },
    "color": 2437779,
    "energy": 5000,
    "modifiers": [
      {
        "tag": "forge:dyes/cyan"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:amethyst_shard"
      }
    ],
    "result": {
      "item": "actuallyadditions:empowered_palis_crystal"
    },
    "time": 50
  })
  
  event.remove({id: 'actuallyadditions:empowering/palis_block'})
  event.custom({
    "type": "actuallyadditions:empowering",
    "base": {
      "item": "actuallyadditions:palis_crystal_block"
    },
    "color": 2437779,
    "energy": 50000,
    "modifiers": [
      {
        "tag": "forge:dyes/cyan"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:amethyst_shard"
      }
    ],
    "result": {
      "item": "actuallyadditions:empowered_palis_crystal_block"
    },
    "time": 500
  })

  event.recipes.thermal.compression_fuel('actuallyadditions:canola_oil').energy(80000)
  event.recipes.thermal.compression_fuel('actuallyadditions:refined_canola_oil').energy(160000)
  event.recipes.thermal.compression_fuel('actuallyadditions:crystallized_oil').energy(240000)
  event.recipes.thermal.compression_fuel('actuallyadditions:empowered_oil').energy(320000)
  event.recipes.thermal.compression_fuel('kubejs:empowered_biodiesel').energy(960000)

  event.custom({
    "type": "immersiveengineering:generator_fuel",
    "burnTime": 400,
    "fluidTag": "wasteland:empowered_biodiesel"
  })
})