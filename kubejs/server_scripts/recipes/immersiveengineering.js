ServerEvents.recipes(event => {
  function mold(type) {
    event.remove({id: `immersiveengineering:blueprint/mold_${type}`})

    event.custom({
      "type": "immersiveengineering:blueprint",
      "category": "molds",
      "inputs": [
        {
          "base_ingredient": {
            "tag": "forge:ingots/steel"
          },
          "count": 3
        },
        {
          "item": "immersiveengineering:wirecutter"
        }
      ],
      "result": {
        "item": `immersiveengineering:mold_${type}`
      }
    })
  }

  function agri_seed_partial(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'agricraft:seed',
      nbt: {
        genes: {
          species: {
            rec: `${name}`,
            dom: `${name}`
          }
        }
      }
    }
  }

  function squeezer_plantoil(input, oil_amount) {
    event.custom({
      "type": "immersiveengineering:squeezer",
      "energy": 6400,
      "fluid": {
        "amount": oil_amount,
        "fluid": "immersiveengineering:plantoil"
      },
      "input": input
    })
  }

  function fertilizer(input, value) {
    return {
      "type": "immersiveengineering:fertilizer",
      "growthModifier": value,
      "input": input
    }
  }

  let plate_types = ['bullet_casing', 'gear', 'packing_4', 'packing_9', 'plate', 'rod', 'unpacking', 'wire']
  for (let type in plate_types) {
    mold(plate_types[type])
  }

  // Replace string with industrial hemp in engineer's hammer recipe
  event.replaceInput({id: "immersiveengineering:crafting/hammer"}, "minecraft:string", "immersiveengineering:hemp_fiber")
  
  // Make Engineer's Manual require iron, so players don't start IE too early
  event.replaceInput({id: "immersiveengineering:crafting/manual"}, "minecraft:lever", "immersiveengineering:hammer")

  // Update paper recipe so that it allows ceramic buckets
  event.remove({id: "immersiveengineering:crafting/paper_from_sawdust"})
  event.shapeless('2x minecraft:paper', ['#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', {"type": "bucketlib:fluid", "fluid": "minecraft:water"}])

  // Leather
  event.replaceInput({input: "minecraft:leather"}, "minecraft:leather", "#forge:leather")

  // Make LV and MV accumulators accessible earlier
  event.replaceInput({id: "immersiveengineering:crafting/capacitor_lv"}, "#forge:plates/lead", "#forge:plates/gold")
  event.replaceInput({id: "immersiveengineering:crafting/capacitor_mv"}, "#forge:plates/nickel", "#forge:plates/electrum")

  // Change blast brick recipe to require nether
  event.replaceInput({id: 'immersiveengineering:crafting/blastbrick'}, "minecraft:magma_block", "minecraft:blaze_powder")

  // Remove silver from heavy engineering block recipe
  event.replaceInput({id: 'immersiveengineering:crafting/heavy_engineering'}, "#forge:ingots/electrum", "minecraft:gold_ingot")

  // Update squeezer recipes
  // event.remove({id: 'immersiveengineering:squeezer/wheat_seeds'})
  squeezer_plantoil(agri_seed_partial('minecraft:beetroot'), 60)
  squeezer_plantoil(agri_seed_partial('immersiveengineering:hemp'), 120)
  squeezer_plantoil(agri_seed_partial('minecraft:melon'), 20)
  squeezer_plantoil(agri_seed_partial('minecraft:pumpkin'), 40)
  squeezer_plantoil(agri_seed_partial('farmersdelight:cabbage'), 80)
  squeezer_plantoil(agri_seed_partial('farmersdelight:tomato'), 60)
  squeezer_plantoil(agri_seed_partial('minecraft:wheat'), 80)

  // Update crafting components blueprint recipe
  event.replaceInput({id: 'immersiveengineering:crafting/blueprint_components'}, "#forge:ingots/aluminum", "pneumaticcraft:plastic")

  // Add a recipe for coke dust in a pulverizer
  event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke')

  // Alternative treated planks recipes
  event.recipes.thermal.bottler('immersiveengineering:treated_wood_horizontal', [Fluid.of('immersiveengineering:creosote', 125), '#minecraft:planks'])
  event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 125,
      "tag": "forge:creosote"
    },
    "input": {
      "tag": "minecraft:planks"
    },
    "results": [
      {
        "item": "immersiveengineering:treated_wood_horizontal"
      }
    ]
  })

  // Remove nickel from radiator and thermoelectric generator recipes
  event.remove({id: 'immersiveengineering:crafting/radiator'})
  event.shaped(
    '4x immersiveengineering:radiator',
    [
      'ici',
      'cbc',
      'ici'
    ],
    {
      i: '#forge:sheetmetals/steel',
      c: '#forge:plates/copper',
      b: {"type": "bucketlib:fluid", "fluid": "minecraft:water"}
    }
  )
  
  event.replaceInput({id: 'immersiveengineering:crafting/thermoelectric_generator'}, '#forge:plates/constantan', '#forge:plates/bronze')

  // Specialized projectiles blueprint recipe
  event.shaped(
    Item.of('immersiveengineering:blueprint', {blueprint: 'specialBullet'}),
    [
      ' a ',
      'aba',
      ' a '
    ],
    {
      a: '#forge:plates/aluminum',
      b: {type: 'forge:partial_nbt', item: 'immersiveengineering:blueprint', nbt: {blueprint: 'bullet'}}
    }
  )

  // Arc furnace electrodes blueprint recipe
  event.shaped(
    Item.of('immersiveengineering:blueprint', {blueprint: 'electrode'}),
    [
      ' a ',
      'ddd',
      'ppp'
    ],
    {
      a: '#forge:plates/steel',
      d: '#forge:dyes/blue',
      p: 'minecraft:paper'
    }
  )

  // Industrial hemp seeds from hemp fiber
  event.custom({
    "type": "immersiveengineering:crusher",
    "energy": 1600,
    "input": {
      "item": "immersiveengineering:hemp_fiber"
    },
    "result": {
      item: 'agricraft:seed',
      nbt: {genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:'immersiveengineering:hemp', rec:'immersiveengineering:hemp'},strength:{dom:1,rec:1}}}
    },
    "secondaries": []
  })

  // Fix duplicate slag smelting recipes
  event.remove({id: 'immersiveengineering:smelting/slag_glass'})
  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "tag": "forge:glass"
    },
    "input1": {
      "tag": "forge:slag"
    },
    "result": {
      "item": "immersiveengineering:slag_glass"
    },
    "time": 200
  })

  event.remove({type: 'immersiveengineering:fertilizer'})
  event.custom(fertilizer({item: "kubejs:amethyst_fertilizer"}, 1.3))
  event.custom(fertilizer({item: "kubejs:industrial_fertilizer"}, 1.6))
  event.custom(fertilizer({item: "kubejs:organic_fertilizer"}, 2.5))
})