let unusedPhytogenicInsolatorRecipes = [
  'white_tulip',
  'sweet_berries',
  'moss_block',
  'bamboo',
  'potato',
  'beetroot',
  'nether_wart',
  'blue_orchid',
  'oxeye_daisy',
  'sugar_cane',
  'dandelion',
  'pumpkin',
  'wheat',
  'kelp',
  'cactus',
  'cornflower',
  'allium',
  'orange_tulip',
  'pink_tulip',
  'wither_rose',
  'sea_pickle',
  'carrot',
  'red_tulip',
  'lily_of_the_valley',
  'melon',
  'azure_bluet',
  'brown_mushroom',
  'red_mushroom',
  'poppy',
  'moss_carpet'
]

let blends = [
  'enderium_dust',
  'signalum_dust',
  'lumium_dust',
  'invar_dust',
  'electrum_dust',
  'bronze_dust',
  'constantan_dust'
]

ServerEvents.recipes(event => {
  // Remove recipes that use fire charges
  event.remove({mod: 'thermal', type: 'minecraft:crafting_shaped', input: 'minecraft:fire_charge'})
  event.remove({mod: 'thermal', type: 'minecraft:crafting_shapeless', input: 'minecraft:fire_charge'})

  // Remove Phytogenic Insolator recipes that have an AgriCraft alternative
  unusedPhytogenicInsolatorRecipes.forEach(recipe => {
    event.remove({id: `thermal:machines/insolator/insolator_${recipe}`})
  })

  event.remove({id: 'thermal:compat/farmersdelight/insolator_farmersdelight_onion'})
  event.remove({id: 'thermal:compat/farmersdelight/insolator_farmersdelight_tomato'})
  event.remove({id: 'thermal:compat/farmersdelight/insolator_farmersdelight_cabbage'})
  event.remove({id: 'thermal:compat/farmersdelight/insolator_farmersdelight_rice'})

  event.remove({id: 'thermal:compat/immersiveengineering/insolator_ie_hemp'})

  // Rework rubber production chain

  // Remove ways to skip Arboreal Extractor early game (Multiservo Press recipes are meant to stay)
  event.remove({id: 'thermal:rubber_from_vine'})
  event.remove({id: 'thermal:rubber_from_dandelion'})
  
  event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_jungle'})

  // Add a new way to get rubber from latex
  event.remove({id: 'thermal:rubber_3'})

  event.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "input1": {
      "type": "pneumaticcraft:fluid",
      "amount": 250,
      "fluid": "thermal:latex"
    },
    "input2": {
      "type": "pneumaticcraft:fluid",
      "amount": 500,
      "fluid": "minecraft:water"
    },
    "item_output": {
      "item": "thermal:rubber"
    },
    "pressure": 2.0,
    "time": 200
  })

  // Remove blend crafting recipes
  blends.forEach(blend =>
    event.remove({output: `thermal:${blend}`, type: 'minecraft:crafting_shapeless'})
  )

  // Make blends not decraftable
  blends.forEach(blend =>
    event.remove({input: `thermal:${blend}`, type: 'thermal:centrifuge'})
  )

  // Remove induction smelter steel recipe
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_steel'})

  // Change machine frame recipe
  event.remove({id: 'thermal:machine_frame'})
  event.shaped('thermal:machine_frame', 
    [
    'SGS',
    'IPI',
    'SGS'
    ], 
    {
      G: '#forge:glass',
      I: '#forge:gears/invar',
      P: 'pncepcb:high_temp_finished_pcb',
      S: '#forge:plates/steel'
    })

  // Change machine recipes
  event.replaceInput({id: 'thermal:machine_crafter'}, 'thermal:machine_frame', 'thermal:upgrade_augment_1')
  event.replaceInput({id: 'thermal:machine_crafter'}, 'minecraft:crafting_table', 'botania:crafty_crate')

  event.replaceInput({id: 'thermal:machine_smelter'}, 'thermal:machine_frame', 'thermal:upgrade_augment_1')
  event.replaceInput({id: 'thermal:machine_crucible'}, 'thermal:machine_frame', 'thermal:upgrade_augment_1')
  event.replaceInput({id: 'thermal:machine_bottler'}, 'thermal:machine_frame', 'thermal:upgrade_augment_1')

  event.replaceInput({id: 'thermal:machine_pulverizer'}, 'thermal:machine_frame', 'thermal:upgrade_augment_2')
  event.replaceInput({id: 'thermal:machine_chiller'}, 'thermal:machine_frame', 'thermal:upgrade_augment_2')

  event.replaceInput({id: 'thermal:machine_insolator'}, 'thermal:machine_frame', 'thermal:upgrade_augment_3')
  event.replaceInput({id: 'thermal:machine_press'}, 'thermal:machine_frame', 'thermal:upgrade_augment_3')

  event.replaceInput({id: 'thermal:machine_crystallizer'}, 'thermal:signalum_plate', 'thermal:bronze_plate')
  event.replaceInput({id: 'thermal:machine_crystallizer'}, '#thermal:glass/hardened', 'minecraft:quartz')

  // Make dynamos use signalum gears
  event.replaceInput({id: 'thermal:dynamo_stirling'}, '#forge:gears/iron', '#forge:gears/signalum')
  event.replaceInput({id: 'thermal:dynamo_compression'}, '#forge:gears/bronze', '#forge:gears/signalum')
  event.replaceInput({id: 'thermal:dynamo_magmatic'}, '#forge:gears/invar', '#forge:gears/signalum')

  // Hardened Tier - Invar, Apatite
  event.replaceInput({id: 'thermal:augments/upgrade_augment_1'}, '#forge:gears/gold', 'thermal:machine_frame')
  event.replaceInput({id: 'thermal:augments/upgrade_augment_1'}, 'minecraft:redstone', 'thermal:apatite')

  // Add a way to get apatite from basalt
  event.custom({
    "type": "thermal:pyrolyzer",
    "ingredient": {
      "item": "minecraft:basalt"
    },
    "result": [
      {
        "item": "thermal:apatite_dust",
        "chance": 0.125
      },
      {
        "fluid": "minecraft:lava",
        "amount": 125
      }
    ],
    "energy": 16000
  })

  // Reinforced Tier - Signalum, Electrum

  // Resonant Tier - Enderium, Lumium
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_enderium'})
  event.recipes.thermal.smelter('kubejs:ender_alloy', ['3x #forge:ingots/lead', '#forge:ingots/silver', '4x minecraft:end_stone'])
  event.recipes.thermal.chiller('thermal:enderium_ingot', [Fluid.of('thermal:ender', 1000), 'kubejs:ender_alloy'])

  // Replace unused gears
  event.remove({id: 'thermal:device_xp_condenser'})
  event.shaped('thermal:device_xp_condenser', 
    [
      "SIS",
      "GCG",
      "SRS"
    ], 
    {
      C: 'thermal:xp_crystal',
      G: '#forge:glass',
      I: '#forge:gears/iron',
      R: 'thermal:redstone_servo',
      S: '#forge:ingots/silver'
    })

  event.remove({id: 'thermal:press_gear_die'})
  event.shaped('thermal:press_gear_die', 
    [
      " P ",
      "PXP",
      " P "
    ], 
    {
      P: '#forge:plates/invar',
      X: '#forge:gears/steel'
    })

  // Remove slag from smelting
  event.remove({id: 'thermal:smelting/slag_from_smelting'})
  event.remove({id: 'thermal:machines/smelter/smelter_gravel'})

  // Prismarine crystals to prismarine shards
  event.recipes.thermal.pulverizer(['minecraft:prismarine_shard'], 'minecraft:prismarine_crystals')
})