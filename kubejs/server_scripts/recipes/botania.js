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

  // Replace feathers with manaweave cloth in flugel tiara recipe
  event.replaceInput({id: 'botania:flighttiara_0'}, 'minecraft:feather', 'botania:manaweave_cloth')

  // Update livingwood recipe
  event.remove({id: 'botania:pure_daisy/livingwood'})
  event.custom({
    "type": "botania:state_copying_pure_daisy",
    "input": {
      "type": "tag",
      "tag": "wasteland:alive_logs"
    },
    "output": "botania:livingwood_log"
  })

  // Remove recipe cycles that hurt progression
  let cycles = [
    [
      'acacia_sapling',
      'dark_oak_sapling',
      'mangrove_propagule',
      'cherry_sapling',
      'oak_sapling',
      'spruce_sapling',
      'birch_sapling',
      'jungle_sapling'
    ],
    [
      'acacia_log',
      'dark_oak_log',
      'mangrove_log',
      'cherry_log',
      'oak_log',
      'spruce_log',
      'birch_log',
      'jungle_log'
    ],
    [
      'dandelion',
      'poppy',
      'blue_orchid',
      'allium',
      'azure_bluet',
      'red_tulip',
      'orange_tulip',
      'white_tulip',
      'pink_tulip',
      'oxeye_daisy',
      'cornflower',
      'lily_of_the_valley',
      'sunflower',
      'lilac',
      'rose_bush',
      'peony'
    ],
    [
      'wheat_seeds',
      'potato',
      'carrot',
      'beetroot_seeds',
      'melon_seeds',
      'pumpkin_seeds',
      'cocoa_beans'
    ],
    [
      'sweet_berries',
      'glow_berries',
      'apple'
    ],
    [
      'pearlescent_froglight',
      'ochre_froglight',
      'verdant_froglight'
    ]
  ]

  cycles.forEach(cycle => {
    for (let i = 0; i < cycle.length; i++) {
      let item1 = cycle[i]
      let item2 = cycle[(i + 1) % cycle.length]
      event.remove({id: `botania:mana_infusion/${item1}_to_${item2}`})
    }
  })

  // Reimplement useful parts of the removed cycles
  event.recipes.botania.mana_infusion('minecraft:azure_bluet', 'minecraft:sunflower', 400, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:sunflower', 'minecraft:lilac', 400, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:lilac', 'minecraft:rose_bush', 400, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:rose_bush', 'minecraft:peony', 400, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:peony', 'minecraft:azure_bluet', 400, 'botania:alchemy_catalyst')

  event.recipes.botania.mana_infusion('minecraft:jungle_sapling', 'minecraft:cocoa_beans', 6000, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:cocoa_beans', 'minecraft:jungle_sapling', 6000, 'botania:alchemy_catalyst')

  event.recipes.botania.mana_infusion('minecraft:glow_berries', 'minecraft:sweet_berries', 6000, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:sweet_berries', 'minecraft:glow_berries', 6000, 'botania:alchemy_catalyst')

  event.recipes.botania.mana_infusion('minecraft:oak_sapling', 'minecraft:apple', 6000, 'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:apple', 'minecraft:oak_sapling', 6000, 'botania:alchemy_catalyst')
})