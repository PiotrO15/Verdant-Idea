let quarry_flowers = [
  'stone',
  'cobblestone',
  'diorite',
  'granite',
  'andesite',
  'tuff',
  'calcite',
  'basalt',
  'deepslate',
  'cobbled_deepslate',
  'blackstone',
  'gravel',
  'sand',
  'red_sand',
  'end_stone',
  'netherrack'
]

let lumber_flowers = [
  'minecraft:oak_log',
  'minecraft:spruce_log',
  'minecraft:birch_log',
  'minecraft:jungle_log',
  'minecraft:dark_oak_log',
  'minecraft:acacia_log',
  'minecraft:mangrove_log',
  'minecraft:cherry_log',
  'minecraft:crimson_stem',
  'minecraft:warped_stem',
  'tconstruct:greenheart_log',
  'tconstruct:skyroot_log',
  'tconstruct:bloodshroom_log',
  'tconstruct:enderbark_log',
  'enchanted:alder_log',
  'enchanted:hawthorn_log',
  'enchanted:rowan_log',
  'thermal:rubberwood_log',
  'ars_nouveau:green_archwood_log',
  'ars_nouveau:blue_archwood_log',
  'ars_nouveau:purple_archwood_log',
  'ars_nouveau:red_archwood_log',
  'minecraft:oak_leaves',
  'minecraft:spruce_leaves',
  'minecraft:birch_leaves',
  'minecraft:jungle_leaves',
  'minecraft:dark_oak_leaves',
  'minecraft:acacia_leaves',
  'minecraft:mangrove_leaves',
  'minecraft:cherry_leaves',
  'tconstruct:earth_slime_leaves',
  'tconstruct:sky_slime_leaves',
  'tconstruct:ender_slime_leaves',
  'enchanted:alder_leaves',
  'enchanted:hawthorn_leaves',
  'enchanted:rowan_leaves',
  'thermal:rubberwood_leaves',
  'ars_nouveau:green_archwood_leaves',
  'ars_nouveau:blue_archwood_leaves',
  'ars_nouveau:purple_archwood_leaves',
  'ars_nouveau:red_archwood_leaves'
]

ServerEvents.tags('item', event => {
  event.add('wasteland:bee_flowering/coal', ['minecraft:torchflower'])
  event.add('productivebees:flowers/sulfur', ['minecraft:deepslate_coal_ore'])
  event.add('productivebees:flowers/powdery', ['minecraft:deepslate_coal_ore'])

  event.removeAll('productivebees:flowers/quarry')
  quarry_flowers.forEach(item => {
    event.add('productivebees:flowers/quarry', `minecraft:${item}`)
  })

  event.removeAll('productivebees:flowers/lumber')
  lumber_flowers.forEach(item => {
    event.add('productivebees:flowers/lumber', item)
  })
})

ServerEvents.tags('block', event => {
  event.add('wasteland:bee_flowering/coal', ['minecraft:torchflower'])
  event.add('productivebees:flowers/sulfur', ['minecraft:deepslate_coal_ore'])
  event.add('productivebees:flowers/powdery', ['minecraft:deepslate_coal_ore'])

  event.remove('productivebees:flowers/lumber', ['#minecraft:logs'])
  event.add('productivebees:flowers/lumber', ['#wasteland:alive_logs'])
  
  event.removeAll('productivebees:flowers/quarry')
  quarry_flowers.forEach(item => {
    event.add('productivebees:flowers/quarry', `minecraft:${item}`)
  })

  event.removeAll('productivebees:flowers/lumber')
  lumber_flowers.forEach(item => {
    event.add('productivebees:flowers/lumber', item)
  })
})

ServerEvents.recipes(event => {
  let unused = [
    {
      namespace: 'ae2',
      honeycombs: [
        'fluix'
      ]
    },
    {
      namespace: 'ars_nouveau',
      honeycombs: [
        'arcane'
      ]
    },
    {
      namespace: 'botania',
      honeycombs: [
        'elementium',
        'manasteel',
        'terrasteel'
      ]
    },
    {
      namespace: 'dusts',
      honeycombs: [
        'niter',
        'saltpeter'
      ]
    },
    {
      namespace: 'gems',
      honeycombs: [
        'amethyst',
        'apatite',
        'cinnabar_dust',
        'fluorite',
        'ruby',
        'sapphire'
      ]
    },
    {
      namespace: 'materials',
      honeycombs: [
        'silicon'
      ]
    },
    {
      namespace: 'mekanism',
      honeycombs: [
        'refined_glowstone',
        'refined_obsidian'
      ]
    },
    {
      namespace: 'mysticalagriculture',
      honeycombs: [
        'inferium',
        'prudentium',
        'tertium',
        'imperium',
        'supremium',
        'awakened_supremium',
        'prosperity'
      ]
    },
    {
      namespace: 'pneumaticcraft',
      honeycombs: [
        'compressed_iron'
      ]
    },
    {
      namespace: 'shroom',
      honeycombs: [
        'brown_shroom',
        'crimson',
        'red_shroom',
        'warped'
      ]
    },
    {
      namespace: 'tconstruct',
      honeycombs: [
        'amethyst_bronze',
        'cobalt',
        'ender_slimy',
        'hepatizon',
        'ichor_slimy',
        'knightslime',
        'manyullyn',
        'pig_iron',
        'queens_slime',
        'rose_gold',
        'sky_slimy',
        'slimesteel',
        'soulsteel'
      ]
    },
    {
      namespace: 'thermal',
      honeycombs: [
        'basalz',
        'blitz',
        'blizz',
        'destabilized_redstone',
        'energized_glowstone',
        'resonant_ender'
      ]
    }
  ]

  // Remove unused centrifuge recipes

  unused.forEach(element => {
    element.honeycombs.forEach(comb => {
      event.remove({ id: `productivebees:centrifuge/${element.namespace}/honeycomb_${comb}` })
    })
  })

  event.remove({ id: 'productivebees:centrifuge/honeycomb_frosty' })
  event.remove({ id: 'productivebees:centrifuge/honeycomb_silky' })
  event.remove({ id: 'productivebees:centrifuge/honeycomb_ghostly' })

  event.remove({id: 'productivebees:upgrades/base'})
  event.shaped(
    'productivebees:upgrade_base',
    [
      "SGS",
      "GWG",
      "STS"
    ],
    {
      G: 'minecraft:gold_ingot',
      S: 'immersiveengineering:stick_treated',
      T: 'productivebees:honey_treat',
      W: 'minecraft:white_wool'
    }
  )

  event.replaceInput({id: 'productivebees:upgrades/productivity'}, 'productivebees:draconic_chunk', 'minecraft:emerald')
  event.replaceInput({id: 'productivebees:upgrades/productivity_2'}, 'minecraft:nether_star', '#forge:gears/tin')
  event.replaceInput({id: 'productivebees:upgrades/filter'}, 'minecraft:writable_book', 'minecraft:hopper')
  event.replaceInput({id: 'productivebees:upgrades/comb_block'}, 'minecraft:item_frame', '#forge:gears/enderium')

  // Update powered centrifuge recipe
  event.remove({id: 'productivebees:powered_centrifuge/mekanism'})
  event.remove({id: 'productivebees:powered_centrifuge/thermal'})
  event.shaped(
    'productivebees:powered_centrifuge',
    [
      "S S",
      "SCS",
      "STS"
    ],
    {
      C: 'productivebees:centrifuge',
      S: '#forge:plates/steel',
      T: 'thermal:machine_centrifuge'
    }
  )

  // Add a recipe for the sturdy bee cage
  event.custom({
    type: "pneumaticcraft:amadron",
    id: "pneumaticcraft:amadron/sturdy_bee_cage",
    input: {
      type: "ITEM",
      amount: 18,
      id: "minecraft:emerald"
    },
    level: 0,
    output: {
      type: "ITEM",
      amount: 1,
      id: 'productivebees:sturdy_bee_cage'
    },
    static: true
  })

  // Simplify the recipe for nests
  event.replaceInput({mod: 'productivebees'}, '#minecraft:swords', '#forge:shears')

  // Remove the need for eggs in inactive dragon egg recipe
  event.replaceInput({id: 'productivebees:inactive_dragon_egg'}, 'minecraft:egg', 'botania:dragonstone_block')

  // Update heated centrifuge recipe
  event.remove({id: 'productivebees:heated_centrifuge'})
  event.shaped(
    'productivebees:heated_centrifuge',
    [
      "CCC",
      "SES",
      "OPO"
    ],
    {
      C: '#forge:plates/constantan',
      E: 'productivebees:inactive_dragon_egg',
      O: 'mekanism:block_osmium',
      P: 'productivebees:powered_centrifuge',
      S: 'mekanism:superheating_element'
    }
  )

  event.remove({id: 'productivebees:centrifuge_cauldron'})
  event.replaceInput({id: 'productivebees:centrifuge'}, 'minecraft:iron_ingot', 'tconstruct:seared_brick')
})