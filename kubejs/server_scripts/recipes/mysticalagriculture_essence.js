ServerEvents.recipes(event => {
  function donut(input, output) {
    event.shaped(
      output,
      [
        "EEE",
        "E E",
        "EEE"
      ],
      {
        E: input
      }
    )
  }

  function checked_2x2(input1, input2, output) {
    event.shaped(
      output,
      [
        "IJ ",
        "JI ",
        "   "
      ],
      {
        I: input1,
        J: input2
      }
    )
  }

  // Add uses for elemental essences
  checked_2x2('mysticalagriculture:air_essence', 'mysticalagriculture:fire_essence', '12x minecraft:sand')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:fire_essence', '16x minecraft:cobblestone')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:air_essence', '16x minecraft:dirt')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:water_essence', '8x minecraft:clay_ball')

  // Add missing ore recipes and change ingots to raw resources
  donut('mysticalagriculture:aluminum_essence', '2x immersiveengineering:raw_aluminum')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:iron_ingot'}, 'minecraft:iron_ingot', 'minecraft:raw_iron')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:copper_ingot'}, 'minecraft:copper_ingot', 'minecraft:raw_copper')
  donut('mysticalagriculture:tin_essence', '2x mekanism:raw_tin')
  donut('mysticalagriculture:silver_essence', '4x immersiveengineering:raw_silver')
  donut('mysticalagriculture:lead_essence', '2x immersiveengineering:raw_lead')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:gold_ingot'}, 'minecraft:gold_ingot', 'minecraft:raw_gold')
  donut('mysticalagriculture:nickel_essence', '2x immersiveengineering:raw_nickel')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'mekanism:ingot_osmium'}, 'mekanism:ingot_osmium', 'mekanism:raw_osmium')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:netherite_ingot'}, 'minecraft:netherite_ingot', 'minecraft:ancient_debris')

  // Unify wither skeleton skull recipes
  event.remove({id: 'mysticalagriculture:essence/minecraft/wither_skeleton_skull'})
  event.remove({id: 'productivebees:wither_skull'})
  event.shaped(
    'minecraft:wither_skeleton_skull',
    [
      "ECE",
      "CSC",
      "ECE"
    ],
    {
      C: 'productivebees:wither_skull_chip',
      E: 'mysticalagriculture:wither_skeleton_essence',
      S: 'mysticalagriculture:blank_skull'
    }
  )
})