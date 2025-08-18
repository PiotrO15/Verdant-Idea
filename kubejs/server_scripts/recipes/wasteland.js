ServerEvents.tags('item', event => {
  event.add('minecraft:logs', ['wasteland:dead_log'])
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
    "type": "mekanism:nucleosynthesizing",
    "duration": 2000,
    "gasInput": {
      "amount": 10,
      "gas": "mekanism:antimatter"
    },
    "itemInput": {
      "ingredient": {
        "item": "ars_nouveau:manipulation_essence"
      }
    },
    "output": {
      "item": "biomeblends:biome_blend",
      "nbt": {blend_type:"wasteland:verdant"}
    }
  })
})