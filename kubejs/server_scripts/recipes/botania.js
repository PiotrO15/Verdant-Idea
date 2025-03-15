ServerEvents.tags('item', event => {
  event.add('wasteland:coal_blocks', ['minecraft:coal_block', 'thermal:charcoal_block', 'immersiveengineering:coke'])
  event.add('wasteland:cakes', ['minecraft:cake', 'farmersdelight:sweet_berry_cheesecake', 'farmersdelight:apple_pie', 'farmersdelight:chocolate_pie'])

  event.remove('minecraft:small_flowers', ['#botania:mystical_flowers', '#botania:special_flowers', 'botania:hydroangeas_motif', 'farmersdelight:wild_cabbages', 'farmersdelight:wild_onions', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_carrots', 'farmersdelight:wild_potatoes', 'farmersdelight:wild_beetroots'])
  event.remove('minecraft:tall_flowers', ['#botania:double_mystical_flowers', 'farmersdelight:wild_rice'])
})

ServerEvents.tags('block', event => {
  event.remove('minecraft:small_flowers', ['#botania:mystical_flowers', '#botania:special_flowers', 'botania:hydroangeas_motif', 'farmersdelight:wild_cabbages', 'farmersdelight:wild_onions', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_carrots', 'farmersdelight:wild_potatoes', 'farmersdelight:wild_beetroots'])
  event.remove('minecraft:tall_flowers', ['#botania:double_mystical_flowers', 'farmersdelight:wild_rice'])
})

ServerEvents.recipes(event => {
  event.replaceInput({id: 'botania:runic_altar/earth'}, 'minecraft:coal_block', '#wasteland:coal_blocks')
  event.replaceInput({id: 'botania:runic_altar/air'}, 'minecraft:feather', 'minecraft:glass_bottle')
  event.replaceInput({id: 'botania:runic_altar/winter'}, 'minecraft:cake', '#wasteland:cakes')

  event.replaceInput({id: 'botania:lexicon'}, 'minecraft:book', 'minecraft:paper')
  event.replaceInput({id: 'botania:lexicon'}, '#minecraft:saplings', '#botania:mystical_flowers')

  event.remove({id: 'botania:mana_spreader'})
  event.shaped(
    'botania:mana_spreader',
    [
      "WWW",
      "WP ",
      "WWW"
    ],
    {
      P: '#botania:petals',
      W: '#botania:livingwood_logs'
    }
  )

  event.recipes.botania.orechid("ae2:sky_stone_block", "minecraft:deepslate", 64)

  // Move Cocoon recipe to endgame
  event.remove({id: 'botania:cocoon'})
  event.shaped(
    'botania:cocoon',
    [
      "SSS",
      "MFM",
      "SAS"
    ],
    {
      A: 'mekanism:pellet_antimatter',
      F: 'botania:fel_pumpkin',
      M: 'botania:manaweave_cloth',
      S: 'minecraft:string'
    }
  )

  // Make fel pumpkin obtained through witch's cauldron
  event.remove({id: 'botania:fel_pumpkin'})
  event.custom({
    "type": "enchanted:witch_cauldron",
    "cookingColor": [
      26,
      71,
      35
    ],
    "finalColor": [
      62,
      128,
      78
    ],
    "ingredients": [
      {
        "item": "minecraft:pumpkin"
      },
      {
        "item": "minecraft:string"
      },
      {
        "item": "minecraft:rotten_flesh"
      },
      {
        "item": "minecraft:gunpowder"
      },
      {
        "item": "minecraft:bone"
      }
    ],
    "power": 0,
    "result": {
      "item": "botania:fel_pumpkin"
    }
  })
})