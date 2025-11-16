const colors = [
  'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
  'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
]

ServerEvents.tags('item', event => {
  event.add('minecraft:logs', ['wasteland:dead_log'])
  event.add('wasteland:iron_sheetmetals', colors.map(color => `immersiveengineering:sheetmetal_colored_${color}`).concat(['immersiveengineering:sheetmetal_iron', 'immersiveengineering:sheetmetal_steel']))
})

ServerEvents.tags('block', event => {
  event.add('wasteland:depleted_soil_catalyst', ['minecraft:pink_petals', 'minecraft:dandelion', 'minecraft:poppy', 'minecraft:grass', 'minecraft:tall_grass', 'minecraft:fern', 'minecraft:large_fern', 'wasteland:clover', 'wasteland:wildflowers'])
  event.add('wasteland:poor_soil_catalyst', ['minecraft:brown_mushroom', 'minecraft:red_mushroom', '#botania:shimmering_mushrooms', 'minecraft:moss_block', 'minecraft:moss_carpet'])
  event.add('wasteland:restoring_soil_catalyst', ['#wasteland:alive_logs', '#botania:mystical_flowers'])

  event.add('wasteland:soil', ['wasteland:depleted_soil', 'wasteland:poor_soil', 'wasteland:restoring_soil', 'minecraft:dirt', 'minecraft:grass_block'])
  event.add('wasteland:depleted_soil', ['wasteland:depleted_soil', 'wasteland:poor_soil', 'wasteland:restoring_soil'])

  event.add('wasteland:fertile_depleted_soil', ['wasteland:poor_soil', 'wasteland:restoring_soil', 'minecraft:dirt', 'minecraft:grass_block'])
  event.add('wasteland:fertile_poor_soil', ['wasteland:restoring_soil', 'minecraft:dirt', 'minecraft:grass_block'])
  event.add('wasteland:fertile_restoring_soil', ['minecraft:dirt', 'minecraft:grass_block'])

  event.add('minecraft:mushroom_grow_block', ['wasteland:depleted_soil', 'wasteland:poor_soil', 'wasteland:restoring_soil', 'minecraft:dirt', 'minecraft:grass_block'])

  event.add('tconstruct:mineable/mattock', ['wasteland:dead_log'])
  event.add('minecraft:mineable/shovel', ['wasteland:depleted_soil_farmland'])
})

ServerEvents.recipes(event => {
  // Sawdust soup
  event.shapeless('kubejs:sawdust_soup', ['minecraft:bowl', '#forge:sawdust', '#forge:sawdust'])

  // Fishing loot
  cuttingBoardRecipe(event, 'kubejs:fish_bones', '2x minecraft:bone_meal', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'kubejs:stale_cod', ['farmersdelight:cod_slice', 'minecraft:bone_meal'], '#forge:tools/knives')
  cuttingBoardRecipe(event, 'kubejs:stale_salmon', ['farmersdelight:salmon_slice', 'minecraft:bone_meal'], '#forge:tools/knives')

  // Furniture cutting
  cuttingBoardRecipe(event, '#another_furniture:curtains', '5x minecraft:string', '#forge:tools/knives')
  cuttingBoardRecipe(event, '#another_furniture:stools', ['minecraft:string', 'minecraft:stick'], '#minecraft:axes')
  cuttingBoardRecipe(event, '#another_furniture:tall_stools', ['minecraft:string', '2x minecraft:stick'], '#minecraft:axes')
  cuttingBoardRecipe(event, '#another_furniture:sofas', ['4x minecraft:string', '2x minecraft:stick'], '#minecraft:axes')
  cuttingBoardRecipe(event, '#another_furniture:lamps', '4x minecraft:string', '#minecraft:axes')

  // Iron scrap
  event.replaceInput({mod: 'immersiveengineering'}, '#forge:sheetmetals', '#wasteland:iron_sheetmetals')

  event.remove({id: 'tconstruct:smeltery/melting/metal/steel/sheetmetal'})
  event.remove({id: 'tconstruct:smeltery/melting/metal/iron/sheetmetal'})
  event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain'})
  event.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_2'})
  event.remove({id: 'tconstruct:smeltery/melting/metal/iron/nugget_3'})

  cuttingBoardRecipe(event, 'immersiveengineering:steel_fence', '4x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'immersiveengineering:fluid_pipe', '2x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'immersiveengineering:metal_ladder_none', '3x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'immersiveengineering:steel_post', '8x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, '#wasteland:iron_sheetmetals', '3x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'minecraft:iron_bars', 'kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'minecraft:iron_door', '6x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'minecraft:chain', '3x kubejs:iron_scrap', '#forge:tools/knives')
  cuttingBoardRecipe(event, 'kubejs:steel_wall', '3x kubejs:iron_scrap', '#forge:tools/knives')

  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "kubejs:iron_scrap"
    },
    "result": {
      "amount": 30,
      "fluid": "tconstruct:molten_iron"
    },
    "temperature": 1000,
    "time": 60
  })

  // Grout recipe
  event.shapeless('4x kubejs:organic_binder', ['minecraft:clay_ball', 'minecraft:green_dye', 'minecraft:green_dye', 'wasteland:compost'])

  event.remove({mod: 'tconstruct', output: 'tconstruct:grout'})

  event.shapeless('2x tconstruct:grout', ['kubejs:organic_binder', '#minecraft:sand', 'minecraft:gravel'])
  event.shapeless('6x tconstruct:grout', ['kubejs:organic_binder', '#minecraft:sand', 'minecraft:gravel', 'kubejs:organic_binder', '#minecraft:sand', 'minecraft:gravel', 'kubejs:organic_binder', '#minecraft:sand', 'minecraft:gravel'])

  // More certain items more accessible
  event.shaped('4x minecraft:arrow', [
    " F ",
    " S ",
    " P "
  ], {
    F: 'minecraft:flint',
    P: '#botania:petals',
    S: '#forge:rods/wooden'
  })

  event.replaceInput({id: 'minecraft:map'}, 'minecraft:compass', '#forge:dyes/black')

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

  event.shapeless('4x kubejs:amethyst_fertilizer', ['minecraft:amethyst_shard', 'wasteland:compost', 'minecraft:bone_meal', '#botania:petals'])
  event.shapeless('8x kubejs:amethyst_fertilizer', ['minecraft:amethyst_shard', 'wasteland:compost', 'mysticalagriculture:earth_essence', 'mysticalagriculture:air_essence'])

  // Steel wall recipe
  event.shaped(
    'kubejs:steel_wall',
    [
      "SSS",
      "SSS",
      "   "
    ],
    {
      S: '#forge:ingots/steel'
    }
  )

  // Wildflowers to dye
  event.shapeless('minecraft:yellow_dye', ['wasteland:wildflowers'])

  // Cheaper floral fertilizer
  event.remove({id: 'botania:fertilizer_dye'})
  event.shapeless('botania:fertilizer', ['minecraft:bone_meal', '#forge:dyes', '#forge:dyes'])

  // Clover Pasture Seeds
  event.recipes.botania.petal_apothecary("botania:grass_seeds", ["wasteland:clover", "botania:lime_petal", "wasteland:clover", "botania:green_petal", "wasteland:clover", "botania:brown_petal"])
})

BlockEvents.rightClicked(event =>{
    if (event.hand != "MAIN_HAND") return;

    if (event.player.isFake()) return;

    if (event.player.mainHandItem.id != "kubejs:amethyst_fertilizer") return;

    if (event.block.id != "wasteland:cracked_sand") return;

    event.block.set("wasteland:depleted_soil")

    event.level.spawnParticles("minecraft:scrape", false, event.block.pos.x + 0.5, event.block.pos.y + 1.1, event.block.pos.z + 0.25, 0.1, 0.25, 0.5, 8, 1)
    event.level.playSound(null, event.block.pos.x, event.block.pos.y, event.block.pos.z, "minecraft:block.gravel.place", "blocks", 0.5, 1.0)

    if (!event.player.isCreative()) event.player.mainHandItem.count--
})