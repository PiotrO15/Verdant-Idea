ServerEvents.tags('item', event => {
  event.remove('minecraft:flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:flowering_azalea', 'minecraft:mangrove_propagule'])
})

ServerEvents.tags('block', event => {
  event.add('minecraft:enderman_holdable', ['wasteland:cracked_sand'])

  event.remove('minecraft:flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:flowering_azalea', 'minecraft:mangrove_propagule'])
})

ServerEvents.compostableRecipes(event => {
  event.add('minecraft:rotten_flesh', 0.5)
  event.add('minecraft:spider_eye', 0.5)
  event.add('minecraft:poisonous_potato', 0.3)
  event.add('thermal:sawdust', 0.3)
  event.add('chipped:muddy_mangrove_roots', 0.3)
})

ServerEvents.recipes(event => {
  // QOL recipes
  event.shaped('4x minecraft:chest', 
    [
    'LLL',
    'L L',
    'LLL'
    ], 
    {
      L: '#minecraft:logs'
  })
    
  event.shaped('16x minecraft:stick', 
    [
    'L',
    'L'
    ], 
    {
      L: '#minecraft:logs'
  })
    
  event.shaped('minecraft:hopper', 
    [
    'I I',
    'IHI',
    ' I '
    ], 
    {
      H: 'woodenhopper:wooden_hopper',
      I: 'minecraft:iron_ingot'
  })

  // Cauldron recipe change to gate Enchanted content
  event.replaceInput({id: 'minecraft:cauldron'}, 'minecraft:iron_ingot', '#forge:plates/steel')

  // Brush without feathers
  event.replaceInput({id: 'minecraft:brush'}, 'minecraft:feather', 'enchanted:ember_moss')
})