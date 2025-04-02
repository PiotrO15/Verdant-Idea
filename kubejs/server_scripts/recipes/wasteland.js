ServerEvents.recipes(event => {
  // Add a recipe for rich soil so that organic compost doesn't slow down the gameplay
  event.shapeless('farmersdelight:rich_soil', ['minecraft:dirt', 'wasteland:compost'])

  // Add a recipe for resonant rod
  event.shaped(
    'wasteland:resonant_rod',
    [
      " TP",
      " TT",
      "T  "
    ],
    {
      P: 'botania:mana_powder',
      T: 'botania:livingwood_twig'
    }
  )

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
})