ServerEvents.recipes(event => {
  let thermal_materials = [
    'iron',
    'gold',
    'copper',
    'netherite',
    'tin',
    'lead',
    'silver',
    'nickel',
    'steel',
    'signalum',
    'lumium',
    'enderium',
    'bronze',
    'electrum',
    'invar',
    'constantan'
  ]

  function metal_press(input, energy, mold, output) {
    event.custom({
      type: "immersiveengineering:metal_press",
      energy: energy,
      input: input,
      mold: mold,
      result: output
    })
  }

  // Remove hammering recipes for plates
  event.remove({type: 'minecraft:crafting_shapeless', input: 'immersiveengineering:hammer', output: '#forge:plates'})

  // Make basic plates craftable using hammer
  event.shapeless('thermal:copper_plate', ['#forge:ingots/copper', '#forge:ingots/copper', 'immersiveengineering:hammer'])
  event.shapeless('thermal:gold_plate', ['#forge:ingots/gold', '#forge:ingots/gold', 'immersiveengineering:hammer'])
  event.shapeless('thermal:iron_plate', ['#forge:ingots/iron', '#forge:ingots/iron', 'immersiveengineering:hammer'])

  // Remove IE plate recipes
  event.remove({type: 'immersiveengineering:metal_press', output: '#forge:plates'})

  // Make sure every plate has a metal press recipe
  thermal_materials.forEach(plate => {
    metal_press(
      {tag: `forge:ingots/${plate}`},
      2400,
      "immersiveengineering:mold_plate",
      {item: `thermal:${plate}_plate`}
    )
  })

  metal_press(
    {tag: 'forge:ingots/aluminum'},
    2400,
    "immersiveengineering:mold_plate",
    {item: 'immersiveengineering:plate_aluminum'}
  )

  metal_press(
    {tag: 'forge:ingots/uranium'},
    2400,
    "immersiveengineering:mold_plate",
    {item: 'immersiveengineering:plate_uranium'}
  )

  // Remove crafting recipes for gears
  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:gears'})
  event.remove({type: 'immersiveengineering:metal_press', output: '#forge:gears'})

  // Make sure every gear has a metal press recipe
  thermal_materials.forEach(gear => {
    metal_press(
      {base_ingredient: {tag: `forge:ingots/${gear}`}, count: 4},
      2400,
      "immersiveengineering:mold_gear",
      {item: `thermal:${gear}_gear`}
    )
  })

  metal_press(
    {base_ingredient: {tag: 'forge:ingots/compressed_iron'}, count: 4},
    2400,
    "immersiveengineering:mold_gear",
    {item: 'pneumaticcraft:compressed_iron_gear'}
  )

  event.recipes.thermal.press('pneumaticcraft:compressed_iron_gear', ['4x #forge:ingots/compressed_iron', 'thermal:press_gear_die'])
})