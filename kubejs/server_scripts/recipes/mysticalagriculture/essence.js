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

  function row(input, output) {
    event.shaped(
      output, 
      [
        "   ", 
        "EEE", 
        "   "
      ], 
      {
        E: input,
      }
    )
  }

  function basic_2x2(inputTL, inputTR, inputBL, inputBR, output) {
    event.shaped(
      output,
      [
        "AB ",
        "CD ",
        "   "
      ],
      {
        A: inputTL,
        B: inputTR,
        C: inputBL,
        D: inputBR
      }
    )
  }

  function music_disc(dye, disc) {
    basic_2x2(
      "mysticalagriculture:blank_record",
      "mysticalagriculture:creeper_essence",
      "mysticalagriculture:skeleton_essence",
      dye, 
      disc
    )
  }

  // Add uses for elemental essences
  checked_2x2('mysticalagriculture:air_essence', 'mysticalagriculture:fire_essence', '12x minecraft:sand')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:fire_essence', '16x minecraft:cobblestone')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:air_essence', '16x minecraft:dirt')
  checked_2x2('mysticalagriculture:earth_essence', 'mysticalagriculture:water_essence', '8x minecraft:clay_ball')

  // Add missing ore recipes and change ingots to raw resources
  event.remove({id: 'mysticalagriculture:essence/common/aluminum_ingot'})
  donut('mysticalagriculture:aluminum_essence', '2x immersiveengineering:raw_aluminum')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:iron_ingot'}, 'minecraft:iron_ingot', 'minecraft:raw_iron')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:copper_ingot'}, 'minecraft:copper_ingot', 'minecraft:raw_copper')
  event.remove({id: 'mysticalagriculture:essence/common/tin_ingot'})
  donut('mysticalagriculture:tin_essence', '2x thermal:raw_tin')
  event.remove({id: 'mysticalagriculture:essence/common/silver_ingot'})
  donut('mysticalagriculture:silver_essence', '4x thermal:raw_silver')
  event.remove({id: 'mysticalagriculture:essence/common/lead_ingot'})
  donut('mysticalagriculture:lead_essence', '2x thermal:raw_lead')
  event.replaceOutput({mod: 'mysticalagriculture', output: 'minecraft:gold_ingot'}, 'minecraft:gold_ingot', 'minecraft:raw_gold')
  event.remove({id: 'mysticalagriculture:essence/common/nickel_ingot'})
  donut('mysticalagriculture:nickel_essence', '2x thermal:raw_nickel')
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

  // fix crafting arrows from skeleton essence
  event.remove({ id: "mysticalagriculture:essence/minecraft/arrow"})
  row("mysticalagriculture:skeleton_essence", "8x minecraft:arrow")

  // fix crafting rotten fles from zombie essence
  event.remove({ id: "mysticalagriculture:essence/minecraft/rotten_flesh"})
  row("mysticalagriculture:zombie_essence", "12x minecraft:rotten_flesh")

  event.remove({ id: "mysticalagriculture:essence/minecraft/slime_ball"})
  row("mysticalagriculture:slime_essence", "8x minecraft:slime_ball")

  event.remove({ id: "mysticalagriculture:essence/minecraft/gunpowder"})
  row("mysticalagriculture:creeper_essence", "6x minecraft:gunpowder")

  event.remove({ id: "mysticalagriculture:essence/minecraft/string"})
  row("mysticalagriculture:spider_essence", "8x minecraft:string")

  event.remove({ id: "mysticalagriculture:essence/appliedenergetics2/certus_quartz_dust"})
  row("mysticalagriculture:certus_quartz_essence", "3x ae2:certus_quartz_dust")

  // music discs
  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_13"})
  music_disc("#forge:dyes/yellow", "minecraft:music_disc_13")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_cat"})
  music_disc("minecraft:lime_dye", "minecraft:music_disc_cat")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_blocks"})
  music_disc("minecraft:orange_dye", "minecraft:music_disc_blocks")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_chirp"})
  music_disc("minecraft:red_dye", "minecraft:music_disc_chirp")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_far"})
  music_disc("minecraft:cyan_dye", "minecraft:music_disc_far")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_mall"})
  music_disc("minecraft:purple_dye", "minecraft:music_disc_mall")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_mellohi"})
  music_disc("minecraft:magenta_dye", "minecraft:music_disc_mellohi")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_stal"})
  music_disc("minecraft:black_dye", "minecraft:music_disc_stal")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_strad"})
  music_disc("minecraft:white_dye", "minecraft:music_disc_strad")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_ward"})
  music_disc("minecraft:green_dye", "minecraft:music_disc_ward")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_11"})
  music_disc("minecraft:gray_dye", "minecraft:music_disc_11")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_wait"})
  music_disc("minecraft:light_blue_dye", "minecraft:music_disc_wait")

  event.remove({ id: "mysticalagriculture:essence/minecraft/music_disc_pigstep"})
  basic_2x2(
    "mysticalagriculture:blank_record",
    "mysticalagriculture:gold_essence", 
    "mysticalagriculture:nether_essence",
    "mysticalagriculture:netherite_essence",
    "minecraft:music_disc_pigstep"
  )
})