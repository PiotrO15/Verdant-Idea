ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/pickaxe', ['ppfluids:fluid_pipe'])
})

ServerEvents.tags('item', event => {
  event.add('wasteland:floral_dinner_tulips', ['minecraft:white_tulip', 'minecraft:orange_tulip', 'minecraft:pink_tulip', 'minecraft:red_tulip'])
  event.add('wasteland:floral_dinner_orchid_allium', ['minecraft:blue_orchid', 'minecraft:allium'])
  event.add('wasteland:floral_dinner_white_flowers', ['minecraft:oxeye_daisy', 'minecraft:azure_bluet'])
  event.add('wasteland:floral_dinner_special', ['minecraft:torchflower', 'minecraft:lily_of_the_valley', 'minecraft:cornflower'])

  event.add('forge:dusts/niter', 'immersiveengineering:dust_saltpeter')
  event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
})

ServerEvents.recipes(event => {
  // Update pipe recipe
  event.remove({id: 'prettypipes:pipe'})
  event.shaped(
    '8x prettypipes:pipe',
    [
      ' R ',
      'SGS',
      ' C '
    ],
    {
      C: '#forge:plates/copper',
      G: '#forge:glass',
      R: 'minecraft:redstone',
      S: '#forge:rods/steel'
    }
  )

  event.remove({id: 'ppfluids:fluid_pipe_to_pipe'})
  event.remove({id: 'ppfluids:fluid_pipe'})
  event.shaped(
    '8x ppfluids:fluid_pipe',
    [
      ' L ',
      'SGS',
      ' C '
    ],
    {
      C: '#forge:plates/copper',
      G: '#forge:glass',
      L: 'minecraft:lapis_lazuli',
      S: '#forge:rods/steel'
    }
  )

  // Change item terminal recipe
  event.remove({id: 'prettypipes:item_terminal'})
  event.shaped(
    'prettypipes:item_terminal',
    [
      'SPS',
      'RCE',
      'SPS'
    ],
    {
      C: 'minecraft:chest',
      E: 'prettypipes:medium_extraction_module',
      P: 'minecraft:ender_pearl',
      R: 'prettypipes:medium_retrieval_module',
      S: '#forge:plates/steel'
    }
  )

  // Change crafting terminal recipe
  event.remove({id: 'prettypipes:crafting_terminal'})
  event.shaped(
    'prettypipes:crafting_terminal',
    [
      'CPC',
      'RTE',
      'CPC'
    ],
    {
      C: 'botania:crafty_crate',
      E: 'prettypipes:high_extraction_module',
      P: 'pneumaticcraft:printed_circuit_board',
      R: 'prettypipes:high_retrieval_module',
      T: 'prettypipes:item_terminal'
    }
  )

  // Update pipe pressurizer recipe
  event.replaceInput({id: 'prettypipes:pressurizer'}, 'minecraft:iron_ingot', 'pneumaticcraft:plastic')

  // Remove iron ore from tag filter module recipe
  event.replaceInput({id: 'prettypipes:tag_filter_modifier'}, '#minecraft:iron_ores', 'minecraft:raw_iron')

  // Functional storage changes
  event.replaceInput({id: "functionalstorage:linking_tool"}, "minecraft:diamond", "minecraft:lapis_lazuli")
  event.replaceInput({id: "functionalstorage:configuration_tool"}, "minecraft:emerald", "minecraft:green_dye")

  // Remove the warp stone recipe, which is implemented as a rite
  event.remove({id: 'waystones:warp_stone'})

  // Floral dinner
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "item": "minecraft:bowl"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item": "minecraft:dandelion"
      },
      {
        "item": "minecraft:poppy"
      },
      {
        "tag": "wasteland:floral_dinner_tulips"
      },
      {
        "tag": "wasteland:floral_dinner_orchid_allium"
      },
      {
        "tag": "wasteland:floral_dinner_white_flowers"
      },
      {
        "tag": "wasteland:floral_dinner_special"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "kubejs:floral_dinner"
    }
  })

  // Weak essence recipe
  event.custom({
    "type": "enchanted:distilling",
    "cookTime": 300,
    "ingredients": [
      {
        "item": "enchanted:hint_of_rebirth"
      },
      {
        "item": "kubejs:overflowing_nectar"
      }
    ],
    "results": [
      {
        "item": "biomeblends:biome_blend",
        "nbt": {blend_type:"wasteland:weak"}
      },
      {
        "item": "minecraft:bowl"
      }
    ]
  })

  event.replaceInput({id: 'immersiveengineering:crafting/watermill'}, '#forge:ingots/steel', 'immersiveengineering:stick_iron')

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

  event.remove({id: 'biomeblends:biome_blend'})

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

  // Earthslime
  event.recipes.botania.petal_apothecary("tconstruct:earth_slime_grass_seeds", ["minecraft:slime_ball", "botania:lime_petal", "minecraft:slime_ball", "botania:lime_petal", "minecraft:slime_ball", "botania:lime_petal"])
  event.recipes.botania.petal_apothecary("tconstruct:earth_slime_sapling", ["minecraft:slime_ball", "botania:lime_petal", "minecraft:slime_ball", "minecraft:oak_sapling", "minecraft:slime_ball", "botania:lime_petal"])
})