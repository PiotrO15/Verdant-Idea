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

  // Make LV Capacitor possible to make early game
  event.replaceInput({id: "immersiveengineering:crafting/capacitor_lv"}, "#forge:plates/lead", "#forge:plates/gold")

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
  event.replaceInput({id: 'immersiveengineering:crafting/blueprint_components'}, "#forge:ingots/aluminum", "pneumaticcraft:printed_circuit_board")

  // Add a recipe for coke dust in a pulverizer
  event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke')
})