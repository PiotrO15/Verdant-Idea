ServerEvents.tags('item', event => {
  event.add('matc:inferium', 'matc:supremium_crystal')
  event.add('matc:prudentium', 'matc:supremium_crystal')
  event.add('matc:tertium', 'matc:supremium_crystal')
  event.add('matc:imperium', 'matc:supremium_crystal')
})

ServerEvents.recipes(event => {
  function augmentInfusionCheckered(essence, item1, item2, output) {
    event.custom({
      "type": "mysticalagriculture:infusion",
      "input": {
        "item": "mysticalagriculture:unattuned_augment"
      },
      "ingredients": [
        {
          "item": item1
        },
        {
          "item": essence
        },
        {
          "item": item2
        },
        {
          "item": essence
        },
        {
          "item": item1
        },
        {
          "item": essence
        },
        {
          "item": item2
        },
        {
          "item": essence
        }
      ],
      "result": {
        "item": output
      }
    })
  }

  function multi(item, count) {
    return Array(count).fill(item)
  }

  // Add a recipe for prosperity shards
  event.recipes.botania.mana_infusion("mysticalagriculture:prosperity_shard", "minecraft:amethyst_shard", 250)

  // Change Mystical Fertilizer recipes
  event.remove({output: 'mysticalagriculture:mystical_fertilizer'})
  event.shapeless('mysticalagriculture:mystical_fertilizer', ['minecraft:bone_meal', 'botania:fertilizer', 'mysticalagriculture:inferium_essence'])

  // Remove all vanilla Mystical Agriculture seeds recipes
  event.remove({type: 'mysticalagriculture:infusion', output: '#forge:seeds'})
  
  // Remove seed reprocessor recipes
  event.remove({type: 'mysticalagriculture:reprocessor'})

  //
  // Infusion Crystals
  //

  // Removes all vanilla Crystal Recipes
  event.remove({id: 'matc:crystals/inferium'})
  event.remove({id: 'matc:crystals/prudentium'})
  event.remove({id: 'matc:crystals/tertium'})
  event.remove({id: 'matc:crystals/imperium'})
  event.remove({id: 'matc:crystals/supremium'})
  event.remove({id: 'matc:crystals/master_infusion_crystal_superium'})

  // Adds new Crystal Recipes
  event.shaped(
    'matc:inferium_crystal',
    [
      'EEE',
      'EPE',
      'EEE'
    ],
    {
      E: 'mysticalagriculture:inferium_essence',
      P: 'mysticalagriculture:prosperity_block'
    }
  )
  event.recipes.botania.runic_altar('matc:prudentium_crystal', ['mysticalagriculture:coal_essence', 'mysticalagriculture:copper_essence', 'mysticalagriculture:iron_essence'].concat(multi('mysticalagriculture:prudentium_essence', 4)), 12500)
  event.recipes.botania.runic_altar('matc:tertium_crystal', ['mysticalagriculture:nether_quartz_essence', 'mysticalagriculture:experience_essence', 'mysticalagriculture:redstone_essence', 'mysticalagriculture:lapis_lazuli_essence', 'mysticalagriculture:silver_essence'].concat(multi('mysticalagriculture:tertium_essence', 4)), 25000)
  event.recipes.botania.runic_altar('matc:imperium_crystal', ['mysticalagriculture:aluminum_essence', 'mysticalagriculture:diamond_essence', 'mysticalagriculture:emerald_essence', 'mysticalagriculture:end_essence', 'mysticalagriculture:gold_essence', 'mysticalagriculture:tin_essence'].concat(multi('mysticalagriculture:imperium_essence', 4)), 50000)
  event.recipes.botania.runic_altar('matc:supremium_crystal', ['matc:inferium_crystal', 'matc:prudentium_crystal', 'matc:tertium_crystal', 'matc:imperium_crystal', 'mysticalagriculture:osmium_essence', 'mysticalagriculture:certus_quartz_essence', 'mysticalagriculture:lead_essence', 'mysticalagriculture:nickel_essence'].concat(multi('mysticalagriculture:supremium_essence', 4)), 100000)

  // Add a recipe for wooden watering can
  event.shaped(
    'kubejs:wooden_watering_can',
    [
      ' MP',
      'PCP',
      ' P '
    ],
    {
      C: 'ceramicbucket:ceramic_bucket',
      M: 'minecraft:bone_meal',
      P: '#minecraft:planks'
    }
  )

  // Update iron watering can recipe
  event.remove({id: 'mysticalagriculture:watering_can'})
  event.shaped(
    'mysticalagriculture:watering_can',
    [
      'FIF',
      'ICI',
      'FIF'
    ],
    {
      C: 'kubejs:wooden_watering_can',
      F: 'mysticalagriculture:mystical_fertilizer',
      I: 'minecraft:iron_ingot'
    }
  )

  // Add experience essence to enchanter recipe
  event.remove({id: 'mysticalagriculture:enchanter'})
  event.shaped(
    'mysticalagriculture:enchanter',
    [
      'ETE',
      ' I ',
      'SSS'
    ],
    {
      E: 'mysticalagriculture:experience_essence',
      I: 'mysticalagriculture:soulium_ingot',
      S: 'mysticalagriculture:soulstone',
      T: 'minecraft:enchanting_table'
    }
  )

  // Augment recipe changes 
  event.remove({id: 'mysticalagriculture:augment/hunger_resistance'})
  augmentInfusionCheckered('mysticalagriculture:imperium_essence', 'farmersdelight:honey_glazed_ham_block', 'farmersdelight:stuffed_pumpkin_block', 'mysticalagriculture:hunger_resistance_augment')
  
  event.remove({id: 'mysticalagriculture:augment/flight'})
  augmentInfusionCheckered('mysticalagriculture:supremium_essence', 'botania:flight_tiara', 'minecraft:nether_star', 'mysticalagriculture:flight_augment')
})