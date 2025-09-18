ServerEvents.tags('item', event => {
  event.add('minecraft:logs', ['wasteland:dead_log'])
})

ServerEvents.tags('block', event => {
  event.add('wasteland:depleted_soil_catalyst', ['minecraft:pink_petals', 'minecraft:dandelion', 'minecraft:poppy', 'minecraft:grass', 'minecraft:tall_grass', 'minecraft:fern', 'minecraft:large_fern', 'wasteland:clover'])
  event.add('wasteland:poor_soil_catalyst', ['minecraft:brown_mushroom', 'minecraft:red_mushroom', '#botania:shimmering_mushrooms', 'minecraft:moss_block', 'minecraft:moss_carpet'])
  event.add('wasteland:restoring_soil_catalyst', ['#wasteland:alive_logs'])
  event.add('wasteland:depleted_soil', ['wasteland:depleted_soil', 'wasteland:poor_soil', 'wasteland:restoring_soil'])
})

ServerEvents.recipes(event => {
  // Add a recipe for rich soil so that organic compost doesn't slow down the gameplay
  event.shapeless('farmersdelight:rich_soil', ['minecraft:dirt', 'wasteland:compost'])

  // Change the end portal recipe
  event.remove({id: 'endportalrecipe:craftable_end_portal'})
  event.shaped(
    'minecraft:end_portal_frame',
    [
      "   ",
      "POP",
      "OOO"
    ],
    {
      O: 'minecraft:obsidian',
      P: 'botania:mana_pearl'
    }
  )

  // Add a recipe for moss block (moss carpets are accessible using compost)
  event.shaped(
    'minecraft:moss_block',
    [
      " C ",
      " C ",
      " C "
    ],
    {
      C: 'minecraft:moss_carpet'
    }
  )

  // Change the map recipe to make map atlas more accessible
  event.replaceInput({id: 'minecraft:map'}, 'minecraft:compass', '#forge:dyes/black')

  // Change the recipe of the plant clipper
  event.remove({id: 'agricraft:clipper'})
  event.shaped(
    'agricraft:clipper',
    [
      " F ",
      "SHF",
      " S "
    ],
    {
      F: 'minecraft:flint',
      H: '#forge:shears',
      S: '#forge:rods/wooden'
    }
  )

  // Add a recipe for sand from cracked sand in bottling machine
  event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 250,
      "tag": "minecraft:water"
    },
    "input": {
      "item": "wasteland:cracked_sand"
    },
    "results": [
      {
        "item": "minecraft:sand"
      }
    ]
  })
  
  event.shapeless('kubejs:sawdust_soup', ['minecraft:bowl', '#forge:sawdust', '#forge:sawdust'])

  event.remove({id: 'biomeblends:biome_blend'})

  event.shaped('4x minecraft:arrow', [
    " F ",
    " S ",
    " P "
  ], {
    F: 'minecraft:flint',
    P: '#botania:petals',
    S: '#forge:rods/wooden'
  })

  event.shaped('kubejs:inconspicuous_visor', [
    "A A",
    "GGG",
    "SPS"
  ], {
    A: '#forge:rods/aluminum',
    G: 'botania:elf_glass_pane',
    P: 'pneumaticcraft:printed_circuit_board',
    S: 'enchanted:attuned_stone'
  })

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "kubejs:fish_bones"
      }
    ],
    "result": [
      {
        "item": "minecraft:bone_meal",
        "count": 2
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  })

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "kubejs:stale_cod"
      }
    ],
    "result": [
      {
        "item": "farmersdelight:cod_slice"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  })

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "kubejs:stale_salmon"
      }
    ],
    "result": [
      {
        "item": "farmersdelight:salmon_slice"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  })

  event.shapeless('3x kubejs:amethyst_fertilizer', ['minecraft:amethyst_shard', 'wasteland:compost', '#botania:petals'])
})

BlockEvents.rightClicked(event =>{
    if (event.hand != "MAIN_HAND") return;
    if (event.player.mainHandItem.id != "kubejs:amethyst_fertilizer") return;

    if (event.block.id != "wasteland:cracked_sand") return;

    event.block.set("wasteland:depleted_soil")

    if (!event.player.isCreative()) event.player.mainHandItem.count--
})